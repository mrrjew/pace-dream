'use client';

import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import { Conversation } from '@/types/chat';
import { useMemo } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';

interface IHeaderProps {
  conversation: Conversation;
}

export const Header: React.FC<IHeaderProps> = ({
  conversation,
}: IHeaderProps) => {
  const { getSession } = useSession();
  const { userId } = getSession();

  const otherUser = useMemo(() => {
    return conversation.users.find((user) => user.id !== userId);
  }, [conversation.users, userId]);

  const chatName = useMemo(() => {
    return conversation.isGroupChat
      ? conversation.name
      : `${otherUser?.firstName} ${otherUser?.lastName}`;
  }, [otherUser, conversation.isGroupChat, conversation.name]);

  return (
    <div className="py-4 px-8 bg-[#FAFBFC] flex justify-between w-full items-center shadow-sm absolute inset-x-0">
      <div className="flex items-center">
        <Avatar sizeClass="h-12 w-12" />
        <p className="font-medium ml-2">{chatName}</p>
      </div>
      <div className="flex">
        <div className="w-10 h-10 p-2.5 rounded-full border-1 border-[#DAE0E6] bg-white shadow">
          <FaRegStar className="w-full h-full" />
        </div>
        <div className="w-10 h-10 p-2.5 rounded-full border-1 border-[#DAE0E6] ml-4 bg-white shadow">
          <IoIosMore className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
