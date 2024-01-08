import { serverAuthAxios } from '@/utils/serverAxios';
import { MessageRoom } from '../../(components)/MessageRoom';
import { DbResponseToMessage, Message } from '@/types/chat';

interface IParams {
  conversationId: string;
}

export default async function MessageBoxPage({ params }: { params: IParams }) {
  const response = await serverAuthAxios().get('/message', {
    params: { chatId: params.conversationId },
  });

  const initialMessages: Message[] = response.data.data?.length
    ? response.data.data.map((item: any) => DbResponseToMessage(item))
    : [];

  return (
    <div className="hidden lg:col-span-9 lg:block lg:border-l-2 lg:border-[#DAE0E6] h-full relative overflow-y-hidden">
      <MessageRoom initialMessages={initialMessages} />
    </div>
  );
}
