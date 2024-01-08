import { Conversation, DbResponseToConversation } from '@/types/chat';
import { serverAuthAxios } from '@/utils/serverAxios';
import { ChatList } from '../(components)/ChatList';
import { MessageRoom } from '../(components)/MessageRoom';
import { EmptyState } from '../(components)/EmptyState';

export default async function InboxPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await serverAuthAxios().get('/chat/all');
  console.log(response.data);
  const conversation: Conversation[] = response.data.data.map((item: any) =>
    DbResponseToConversation(item)
  );

  return (
    <div className="grid grid-cols-12 h-screen lg:h-[90vh]">
      <div className="col-span-12 lg:col-span-3 h-full overflow-y-auto">
        <ChatList initialConversations={conversation} />
      </div>
      {/* <div className="hidden lg:col-span-9 lg:block lg:border-l-2 lg:border-[#DAE0E6] h-full relative overflow-y-hidden"> */}
      {children}
      {/* </div> */}
    </div>
  );
}
