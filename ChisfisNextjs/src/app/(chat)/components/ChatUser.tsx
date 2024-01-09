'use client';

import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import { Conversation } from '@/types/chat';
import { useRouter } from 'next/navigation';

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
    : `${sender.firstName} ${sender.lastName}`;

  const router = useRouter();

  const handleClick = () => {
    // @ts-ignore-error
    router.push(`/inbox/${conversation.id}`);
  };

  return (
    <div
      className="p-4 flex hover:bg-[#F8F9FB] transition cursor-pointer"
      onClick={handleClick}
    >
      <div className="py-2 px-4">
        <Avatar sizeClass="h-12 w-12" imgUrl={sender.profilePic} />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <p className="font-medium">{name}</p>
          <span className="text-xs text-neutral-500">10:00 PM</span>
        </div>
        <span className="mt-1 text-sm text-neutral-600 w-full">
          {conversation.latestMessage?.message.substring(0, 50)}
        </span>
      </div>
    </div>
  );
};
