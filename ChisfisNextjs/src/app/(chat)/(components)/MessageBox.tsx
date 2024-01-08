'use client';

import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import { Message } from '@/types/chat';
import Moment from 'react-moment';

interface IMessageBoxProps {
  message: Message;
}

export const MessageBox: React.FC<IMessageBoxProps> = ({
  message,
}: IMessageBoxProps) => {
  const { getSession } = useSession();
  const { userId } = getSession();

  const self = message.sender.id === userId;

  const OwnMessage = () => {
    return (
      <div className="flex gap-3 px-4 py-2 justify-end w-full">
        <div className="order-2">
          <Avatar sizeClass="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-1 items-end w-full">
          <div className="bg-[#632DF8] text-white rounded-lg rounded-br-none px-4 py-2.5 max-w-[60%]">
            <p className="text-sm">{message.message}</p>
          </div>
          <span className="text-xs text-neutral-500">
            <Moment format="hh:mm A">{message.createdAt}</Moment>
          </span>
        </div>
      </div>
    );
  };

  const OtherMessage = () => {
    return (
      <div className="flex gap-3 px-4 py-2 justify-start w-full">
        <div className="">
          <Avatar sizeClass="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <div className="bg-white border-[1px] rounded-lg border-[#EAEBF0] rounded-bl-none px-4 py-2.5 max-w-[60%]">
            <p className="text-sm">{message.message}</p>
          </div>
          <span className="text-xs text-neutral-500">
            <Moment format="hh:mm A">{message.createdAt}</Moment>
          </span>
        </div>
      </div>
    );
  };

  return self ? OwnMessage() : OtherMessage();
};
