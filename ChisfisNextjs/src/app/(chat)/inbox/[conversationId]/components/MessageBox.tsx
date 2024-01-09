'use client';

import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import { Message } from '@/types/chat';
import Moment from 'react-moment';

interface IMessageContainerProps {
  message: Message;
}

export const MessageBox: React.FC<IMessageContainerProps> = ({
  message,
}: IMessageContainerProps) => {
  const { getSession } = useSession();
  const { userId } = getSession();

  const self = message.sender.id === userId;

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
          className={`rounded-lg rounded-bl-none px-4 py-2.5 max-w-[60%] ${
            self
              ? 'bg-[#632DF8] text-white'
              : 'bg-white border-[1px] border-[#EAEBF0]'
          }`}
        >
          <p className="text-sm">{message.message}</p>
        </div>
        <span className="text-xs text-neutral-500">
          <Moment format="hh:mm A">{message.createdAt}</Moment>
        </span>
      </div>
    </div>
  );
};
