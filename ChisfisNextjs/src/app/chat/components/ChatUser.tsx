'use client';

import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import { Conversation } from '@/types/chat';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { MessageDate } from '../inbox/[conversationId]/components/MessageDate';

interface IChatUserProps {
  conversation: Conversation;
}

export const ChatUser: React.FC<IChatUserProps> = ({
  conversation,
}: IChatUserProps) => {
  const { getSession } = useSession();
  const { userId } = getSession();

  const sender = conversation.users.filter((user) => user.id !== userId)[0];
  const name = conversation.isGroupChat
    ? conversation.name
    : `${sender.first_name} ${sender.last_name}`;

  const router = useRouter();

  const handleClick = () => {
    
    // @ts-ignore-error
    router.push(`/inbox/${conversation?.id}`);
  };

  const latestMessageSender = useMemo(() => {
    return conversation.latestMessage?.sender?.id === userId
      ? 'You'
      : conversation.latestMessage?.sender.first_name;
  }, [conversation]);

  return (
    <div
      className="p-4 flex hover:bg-[#F8F9FB] transition cursor-pointer"
      onClick={handleClick}
    >
      <div className="py-2 px-4">
        {conversation.isGroupChat ? (
          <div className="flex w-12 h-12 flex-wrap justify-center">
            {conversation.users.slice(0, 3).map((user) => (
              <Avatar
                sizeClass="h-6 w-6"
                imgUrl={user.profilePic}
                key={user.id}
              />
            ))}
          </div>
        ) : (
          <Avatar sizeClass="h-12 w-12" imgUrl={sender.profilePic} />
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <p className="font-medium">{name}</p>
          {conversation.latestMessage && (
            <MessageDate date={conversation.latestMessage.createdAt} />
          )}
        </div>
        {conversation.latestMessage ? (
          <span className="mt-1 text-sm text-neutral-600 w-full">
            {latestMessageSender}:{' '}
            {conversation.latestMessage?.message.substring(0, 50)}
          </span>
        ) : (
          <span className="mt-1 text-sm text-neutral-600 w-full">
            Start Conversation
          </span>
        )}
      </div>
    </div>
  );
};
