import { Conversation, DbResponseToConversation } from '@/types/chat';
import { serverAuthAxios } from '@/utils/serverAxios';
import { EmptyState } from '../(components)/EmptyState';

export default async function InboxPage() {
  const response = await serverAuthAxios().get('/chat/all');
  console.log(response.data);
  const conversation: Conversation[] = response.data.data.map((item: any) =>
    DbResponseToConversation(item)
  );

  return (
    <div className="hidden lg:col-span-9 lg:block lg:border-l-2 lg:border-[#DAE0E6] h-full">
      <EmptyState />
    </div>
  );
}
