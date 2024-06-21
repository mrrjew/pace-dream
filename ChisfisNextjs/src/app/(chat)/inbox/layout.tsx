import { Conversation, DbResponseToConversation } from "@/types/chat";
import { serverAuthAxios } from "@/utils/serverAxios";
import { ChatList } from "../components/ChatList";

export default async function InboxPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await serverAuthAxios().get("/chat/all");
  const conversation: Conversation[] = response.data.data.map((item: any) =>
    DbResponseToConversation(item),
  );

  return (
    <div className="grid grid-cols-12 h-screen lg:h-[90vh]">
      <ChatList initialConversations={conversation} />

      {children}
    </div>
  );
}
