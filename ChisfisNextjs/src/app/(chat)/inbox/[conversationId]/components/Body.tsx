'use client';

import useConversation from '@/hooks/useConversation';
import { useSession } from '@/hooks/useSession';
import Avatar from '@/shared/Avatar';
import {
  DbResponseToMessage,
  InboxMessage,
  Message,
  MessageStatus,
  MessageType,
  SendingMessage,
} from '@/types/chat';
import { clientAuthAxios } from '@/utils/clientAxios';
import { pusherClient } from '@/utils/pusher';
import { find } from 'lodash';
import { Fragment, useEffect, useRef, useState } from 'react';
import { IoIosAttach, IoIosSend } from 'react-icons/io';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { MessageBox } from './MessageBox';
import NcModal from '@/shared/NcModal';
import { ImagePreviewModal } from './ImagePreviewModal';

interface IBodyProps {
  initialMessages: Message[];
}

export const Body: React.FC<IBodyProps> = ({ initialMessages }: IBodyProps) => {
  const [messages, setMessages] = useState<InboxMessage[]>(initialMessages);

  const [inputMessage, setInputMessage] = useState('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const imageShareRef = useRef<HTMLInputElement>(null);

  const bottomRef = useRef<HTMLDivElement>(null);

  const handleShareIconClick = () => {
    imageShareRef.current?.click();
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;
    setImageFiles([...fileList]);
    setShowPreviewModal(true);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMessage) return;
    setMessages((prevMessages) => {
      const newMessage: SendingMessage = {
        id: new Date().toISOString(),
        message: inputMessage,
        sender: { id: userId! },
        createdAt: new Date(),
        conversationId: conversationId!,
        status: MessageStatus.SENDING,
        type: MessageType.TEXT,
      };
      return [...prevMessages, newMessage];
    });
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
    setInputMessage('');
  };

  const handleFileShare = (images: File[]) => {
    setShowPreviewModal(false);
    const messages: SendingMessage[] = [];
    images.forEach((image) => {
      const newMessage: SendingMessage = {
        id: new Date().toISOString(),
        message: 'Sent an image',
        sender: { id: userId! },
        createdAt: new Date(),
        conversationId: conversationId!,
        status: MessageStatus.SENDING,
        type: MessageType.IMAGE,
        file: image,
      };
      messages.push(newMessage);
    });

    setMessages((prevMessages) => {
      return [...prevMessages, ...messages];
    });
    setImageFiles([]);
  };

  const { getSession } = useSession();
  const { userId } = getSession();

  const { conversationId } = useConversation();

  useEffect(() => {
    pusherClient.subscribe(conversationId);
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    });

    const messageHandler = (message: any) => {
      const newMessage = DbResponseToMessage(message);
      setMessages((prevMessages) => {
        if (find(prevMessages, { id: newMessage.id })) return prevMessages;
        if (newMessage.sender.id === userId) return prevMessages;
        return [...prevMessages, newMessage];
      });
    };

    pusherClient.bind('message:new', messageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind('message:new', messageHandler);
    };
  }, [conversationId]);

  return (
    <Fragment>
      <div className="overflow-y-auto flex flex-col h-full px-4 py-20">
        <div className="flex-1"></div>
        {messages.map((message) => (
          <MessageBox message={message} key={message.id} />
        ))}
      </div>
      <div className="py-4 px-8 bg-[#FAFBFC] flex w-full items-center absolute inset-x-0 bottom-0">
        <div className="flex items-center">
          <Avatar sizeClass="h-12 w-12" />
        </div>
        <div className="flex flex-1 bg-white border-[1px] rounded-lg shadow-sm ml-4 border-[#EAEBF0] py-2 px-4 items-center">
          <form onSubmit={handleFormSubmit} className="flex w-full">
            <input
              type="text"
              placeholder="Write your message here..."
              className="w-full outline-none text-sm text-gray-500 ml-1 bg-transparent border-none focus:outline-none focus:border-none flex-1"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit">
              <IoIosSend className="w-6 h-6 mx-1 text-neutral-700" />
            </button>
          </form>
          <div className="flex items-center">
            <MdOutlineEmojiEmotions className="w-6 h-6 mx-1 text-neutral-700 cursor-pointer" />
            <input
              type="file"
              accept="image/*"
              multiple={true}
              className="hidden"
              ref={imageShareRef}
              onChange={handleImageSelect}
            />
            <IoIosAttach
              className="w-6 h-6 mx-1 text-neutral-700 cursor-pointer"
              onClick={handleShareIconClick}
            />
            <NcModal
              modalTitle={`Sharing ${imageFiles.length} images`}
              contentPaddingClass="p-0"
              renderContent={() =>
                imageFiles.length ? (
                  <ImagePreviewModal
                    images={imageFiles}
                    handleSend={handleFileShare}
                    onClose={() => {
                      setImageFiles([]);
                      setShowPreviewModal(false);
                    }}
                  />
                ) : null
              }
              renderTrigger={(_) => null}
              isOpenProp={showPreviewModal}
              onCloseModal={() => setShowPreviewModal(false)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
