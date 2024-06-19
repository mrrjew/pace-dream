"use client";

import { Conversation, DbResponseToConversation } from "@/types/chat";
import { ChatUser } from "./ChatUser";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useMemo, useState } from "react";
import { pusherClient } from "@/utils/pusher";
import { useSession } from "@/hooks/useSession";
import useConversation from "@/hooks/useConversation";

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

  const { getSession } = useSession();
  const { userId } = getSession();

  const { conversationId } = useConversation();

  useEffect(() => {
    if (!userId) return;
    pusherClient.subscribe(userId!);

    const updateHandler = (dbChat: any) => {
      const chat = DbResponseToConversation(dbChat);
      const chatExists = conversations.find((conv) => conv.id === chat.id);
      if (chatExists) {
        setConversations((prevConversations) =>
          prevConversations.map((conv) => {
            if (conv.id === chat.id) {
              return {
                ...conv,
                latestMessage: chat.latestMessage,
              };
            }
            return conv;
          }),
        );
      } else {
        setConversations((prevConversations) => [chat, ...prevConversations]);
      }
    };

    const newHandler = (dbChat: any) => {
      const chat = DbResponseToConversation(dbChat);
      const chatExists = conversations.find((conv) => conv.id === chat.id);
      if (!chatExists) {
        setConversations((prevConversations) => [chat, ...prevConversations]);
      }
    };

    pusherClient.bind("conversation:update", updateHandler);

    pusherClient.bind("conversation:new", newHandler);

    return () => {
      pusherClient.unsubscribe(userId!);
      pusherClient.unbind("conversation:update", updateHandler);
      pusherClient.unbind("conversation:new", newHandler);
    };
  }, [userId]);

  const sortedConversations = useMemo(() => {
    return conversations.sort((a, b) => {
      if (!a.latestMessage || !b.latestMessage) return 0;
      return (
        new Date(b.latestMessage.createdAt).getTime() -
        new Date(a.latestMessage.createdAt).getTime()
      );
    });
  }, [conversations]);

  return (
    <div
      className={`col-span-12 lg:col-span-3 h-full overflow-y-auto ${
        conversationId ? "hidden" : ""
      }`}
    >
      <h2 className="ml-4 text-lg mt-2">All Messages</h2>
      <div className="my-2 px-4">
        <SearchBox />
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col">
        {sortedConversations.map((conversation) => (
          <ChatUser conversation={conversation} key={conversation.id} />
        ))}
      </div>
    </div>
  );
};
