'use client';

import { Conversation } from '@/types/chat';
import { ChatUser } from './ChatUser';
import { IoSearchOutline } from 'react-icons/io5';
import { useState } from 'react';

const SearchBox: React.FC<{}> = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center border border-gray-200 rounded-full px-4 py-1 w-full">
        <IoSearchOutline className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search Inbox"
          className="w-full outline-none text-sm text-gray-500 ml-1 bg-transparent border-none"
        />
      </div>
    </div>
  );
};
interface IChatListProps {
  initialConversations: Conversation[];
}

export const ChatList: React.FC<IChatListProps> = ({
  initialConversations,
}: IChatListProps) => {
  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);
  return (
    <>
      <h2 className="ml-4 text-lg mt-2">All Messages</h2>
      <div className="my-2 px-4">
        <SearchBox />
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col">
        {conversations.map((conversation) => (
          <ChatUser conversation={conversation} key={conversation.id} />
        ))}
      </div>
    </>
  );
};
