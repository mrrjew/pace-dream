import {
  DbResponseToConversation,
  DbResponseToMessage,
  Message,
} from '@/types/chat';
import { serverAuthAxios } from '@/utils/serverAxios';
import { EmptyState } from '../../components/EmptyState';
import { Body } from './components/Body';
import { Header } from './components/Header';

interface IParams {
  conversationId: string;
}

export default async function MessageBoxPage({ params }: { params: IParams }) {
  const response = await serverAuthAxios().get('/message', {
    params: { chatId: params.conversationId },
  });

  const conversationResponse = await serverAuthAxios().get(
    `/chat/${params.conversationId}`
  );
  const conversation = DbResponseToConversation(conversationResponse.data.data);

  const initialMessages: Message[] = response.data.data?.length
    ? response.data.data.map((item: any) => DbResponseToMessage(item))
    : [];

  if (!conversation)
    return (
      <div className="hidden lg:col-span-9 lg:block lg:border-l-2 lg:border-[#DAE0E6] h-full">
        <EmptyState />
      </div>
    );

  return (
    <div className="hidden lg:col-span-9 lg:block lg:border-l-2 lg:border-[#DAE0E6] h-full relative overflow-y-hidden">
      <div className="h-full relative flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={initialMessages} />
      </div>
    </div>
  );
}
