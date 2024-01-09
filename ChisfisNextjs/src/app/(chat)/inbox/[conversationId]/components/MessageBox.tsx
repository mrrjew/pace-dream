'use client';

import useConversation from '@/hooks/useConversation';
import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import { InboxMessage, MessageStatus, isSendingMessage } from '@/types/chat';
import { clientAuthAxios } from '@/utils/clientAxios';
import { useEffect, useMemo, useState } from 'react';
import Moment from 'react-moment';

interface IMessageContainerProps {
  message: InboxMessage;
}

export const MessageBox: React.FC<IMessageContainerProps> = ({
  message,
}: IMessageContainerProps) => {
  const { getSession } = useSession();
  const { userId } = getSession();
  const [localMessage, setLocalMessage] = useState(message);

  const self = message.sender.id === userId;

  const { conversationId } = useConversation();

  const sendMessage = async () => {
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
    }
  };

  useEffect(() => {
    if (isSendingMessage(localMessage)) {
      if (localMessage.status === MessageStatus.SENDING) {
        sendMessage();
      }
    }
  }, []);

  const date = useMemo(() => {
    const today = new Date();
    const messageDate = new Date(message.createdAt);

    if (
      today.getFullYear() === messageDate.getFullYear() &&
      today.getMonth() === messageDate.getMonth() &&
      today.getDate() === messageDate.getDate()
    ) {
      return <Moment format="hh:mm A">{message.createdAt}</Moment>;
    } else {
      return <Moment format="MMM DD hh:mm A">{message.createdAt}</Moment>;
    }
  }, [message]);

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
          className={`rounded-lg px-4 py-2.5 max-w-[60%] ${
            self
              ? 'bg-[#632DF8] text-white rounded-br-none'
              : 'bg-white border-[1px] border-[#EAEBF0] rounded-bl-none'
          }`}
        >
          <p className="text-sm">{message.message}</p>
        </div>
        <span className="text-xs text-neutral-500">{date}</span>
      </div>
    </div>
  );
};
