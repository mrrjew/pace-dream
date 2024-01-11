'use client';

import useConversation from '@/hooks/useConversation';
import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import {
  InboxMessage,
  MessageStatus,
  MessageType,
  SendingMessage,
  isSendingMessage,
} from '@/types/chat';
import { clientAuthAxios } from '@/utils/clientAxios';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Moment from 'react-moment';
import { MessageDate } from './MessageDate';
import { IoMdRefresh } from 'react-icons/io';

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
      localMessage.status === MessageStatus.SENDING
  );
  const [error, setError] = useState(false);

  const self = message.sender.id === userId;

  const { conversationId } = useConversation();

  const url = useMemo(() => {
    if (message.type === MessageType.IMAGE) {
      return isSendingMessage(localMessage)
        ? URL.createObjectURL(localMessage.file!)
        : localMessage.url;
    }
    return '';
  }, [localMessage]);

  const sendMessage = async (message: SendingMessage) => {
    setSending(true);
    setError(false);
    try {
      await clientAuthAxios().post('/message/send', {
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

  const sendImage = async (message: SendingMessage) => {
    if (message.type !== MessageType.IMAGE || !message.file) return;
    setSending(true);
    setError(false);
    try {
      const formData = new FormData();
      formData.append('chatId', conversationId);
      formData.append('message', message.message);
      formData.append('images', message.file!);
      formData.append('type', message.type);
      const res = await clientAuthAxios().post('/message/send', formData);
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
        } else if (localMessage.type === MessageType.IMAGE) {
          sendImage(localMessage);
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
        self ? 'justify-end' : 'justify-start'
      }`}
    >
      <div className={`${self ? 'order-2' : ''}`}>
        <Avatar sizeClass="h-8 w-8" />
      </div>
      <div
        className={`flex flex-col gap-1 w-full ${
          self ? 'items-end' : 'items-start'
        }`}
      >
        <div
          className={`rounded-lg py-2.5 max-w-[60%] ${
            self
              ? 'bg-[#632DF8] text-white rounded-br-none'
              : 'bg-white border-[1px] border-[#EAEBF0] rounded-bl-none'
          } ${url ? 'px-2.5' : 'px-4'}`}
        >
          {url ? (
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
          ) : (
            <p className="text-sm">{message.message}</p>
          )}
        </div>
        <span className="text-xs text-neutral-500">
          {error ? (
            <span className="text-red-500 flex gap-1 items-center">
              Error Sending{' '}
              <IoMdRefresh
                className="text-sm cursor-pointer"
                onClick={() => triggerSend()}
              />
            </span>
          ) : sending ? (
            'Sending...'
          ) : (
            <MessageDate date={message.createdAt} />
          )}
        </span>
      </div>
    </div>
  );
};
