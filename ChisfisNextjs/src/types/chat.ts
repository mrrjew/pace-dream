import { DbResponseToUser, User } from './user';

export interface Conversation {
  id: string;
  name: string;
  isGroupChat: boolean;
  users: User[];
  latestMessage?: Message;
  createdAt: Date;
  updatedAt: Date;
}

export enum MessageTypeEnum {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  FILE = 'FILE',
}

export interface Message {
  id: string;
  sender: User;
  conversationId: string;
  message: string;
  readyBy?: User[];
  type: MessageTypeEnum;
  createdAt: Date;
  updatedAt: Date;
}

export const MessageTypeTextToEnum = (type: string): MessageTypeEnum => {
  switch (type) {
    case 'text':
      return MessageTypeEnum.TEXT;
    case 'image':
      return MessageTypeEnum.IMAGE;
    case 'file':
      return MessageTypeEnum.FILE;
    case 'video':
      return MessageTypeEnum.VIDEO;
    default:
      return MessageTypeEnum.TEXT;
  }
};

export const DbResponseToConversation = (conversation: any): Conversation => {
  return {
    id: conversation._id,
    name: conversation.name,
    isGroupChat: conversation.isGroupChat,
    users: conversation.users.map((user: any) => DbResponseToUser(user)),
    latestMessage: conversation.latestMessage
      ? DbResponseToMessage(conversation.latestMessage)
      : undefined,
    createdAt: new Date(conversation.createdAt),
    updatedAt: new Date(conversation.updatedAt),
  };
};

export const DbResponseToMessage = (message: any): Message => {
  return {
    id: message._id,
    sender: DbResponseToUser(message.sender),
    conversationId: message.chat,
    message: message.message,
    readyBy:
      message.readBy && message.readBy.length
        ? message.readBy.map((user: any) => DbResponseToUser(user))
        : [],
    type: MessageTypeTextToEnum(message.type),
    createdAt: new Date(message.createdAt),
    updatedAt: new Date(message.updatedAt),
  };
};
