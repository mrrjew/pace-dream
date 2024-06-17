"use client";

import useConversation from "@/hooks/useConversation";
import { useSession } from "@/hooks/useSession";
import Avatar from "@/shared/Avatar";
import {
  InboxMessage,
  MessageStatus,
  MessageType,
  SendingMessage,
  isSendingMessage,
} from "@/types/chat";
import { clientAuthAxios } from "@/utils/clientAxios";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { MessageDate } from "./MessageDate";

interface IMessageContainerProps {
  message: InboxMessage;
}

export const MessageBox: React.FC<IMessageContainerProps> = ({
  message,
}: IMessageContainerProps) => {
  const { getSession } = useSession();
  const { userId } = getSession();
  const [localMessage, setLocalMessage] = useState(message);
  const [sending, setSending] = useState(
    isSendingMessage(localMessage) &&
      localMessage.status === MessageStatus.SENDING,
  );
  const [error, setError] = useState(false);

  const self = message.sender.id === userId;

  const { conversationId } = useConversation();

  const url = useMemo(() => {
    if (
      message.type === MessageType.IMAGE ||
      message.type === MessageType.FILE ||
      message.type === MessageType.VIDEO
    ) {
      return isSendingMessage(localMessage)
        ? URL.createObjectURL(localMessage.file!)
        : localMessage.url;
    }
    return "";
  }, [localMessage]);

  const sendMessage = async (message: SendingMessage) => {
    setSending(true);
    setError(false);
    try {
      await clientAuthAxios().post("/message/send", {
        chatId: conversationId,
        message: message.message,
      });
      setLocalMessage((prevMessage) => ({
        ...prevMessage,
        status: MessageStatus.SENT,
      }));
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const sendFile = async (message: SendingMessage) => {
    if (!message.file) return;
    setSending(true);
    setError(false);
    try {
      const formData = new FormData();
      formData.append("chatId", conversationId);
      formData.append("message", message.message);
      if (message.type === MessageType.IMAGE) {
        formData.append("images", message.file!);
      }
      if (message.type === MessageType.FILE) {
        formData.append("files", message.file!);
      }
      if (message.type === MessageType.VIDEO) {
        formData.append("video", message.file!);
      }
      formData.append("type", message.type);
      const res = await clientAuthAxios().post("/message/send", formData);
      setLocalMessage((prevMessage) => ({
        ...prevMessage,
        status: MessageStatus.SENT,
      }));
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const triggerSend = () => {
    if (isSendingMessage(localMessage)) {
      if (localMessage.status === MessageStatus.SENDING) {
        if (localMessage.type === MessageType.TEXT) {
          sendMessage(localMessage);
        } else {
          sendFile(localMessage);
        }
      }
    }
  };

  useEffect(() => {
    triggerSend();
  }, []);

  return (
    <div
      className={`flex gap-3 px-4 py-2 w-full ${
        self ? "justify-end" : "justify-start"
      }`}
    >
      <div className={`${self ? "order-2" : ""}`}>
        <Avatar sizeClass="h-8 w-8" />
      </div>
      <div
        className={`flex flex-col gap-1 w-full ${
          self ? "items-end" : "items-start"
        }`}
      >
        <div
          className={`rounded-lg py-2.5 max-w-[60%] ${
            self
              ? "bg-[#632DF8] text-white rounded-br-none"
              : "bg-white border-[1px] border-[#EAEBF0] rounded-bl-none"
          } ${url && message.type === MessageType.IMAGE ? "px-2.5" : "px-4"}`}
        >
          {url && message.type === MessageType.IMAGE ? (
            <div className="h-auto w-[350px] md:w-[450px]">
              <Image
                src={url!}
                alt=""
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-full"
              />
            </div>
          ) : message.type === MessageType.FILE ||
            message.type === MessageType.VIDEO ? (
            <div className="h-16 flex items-center gap-2 bg-[#F9F8FB] rounded-lg text-neutral-700 px-2.5">
              {!self && (
                <a className="cursor-pointer" href={url} target="_blank">
                  <MdDownload />
                </a>
              )}
              <p className="flex-1">{message.message}</p>
            </div>
          ) : (
            <p className="text-sm">{message.message}</p>
          )}
        </div>
        <span className="text-xs text-neutral-500">
          {error ? (
            <span className="text-red-500 flex gap-1 items-center">
              Error Sending{" "}
              <IoMdRefresh
                className="text-sm cursor-pointer"
                onClick={() => triggerSend()}
              />
            </span>
          ) : sending ? (
            "Sending..."
          ) : (
            <MessageDate date={message.createdAt} />
          )}
        </span>
      </div>
    </div>
  );
};
