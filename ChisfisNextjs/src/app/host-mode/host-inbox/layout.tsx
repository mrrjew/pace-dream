
import { ChatList } from "@/app/chat/components/ChatList";
import { Conversation, DbResponseToConversation } from "@/types/chat";
import { serverAuthAxios } from "@/utils/serverAxios";

export default async function InboxPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">{children}</div>;
}
