'use client';

import Avatar from '@/shared/Avatar';
import { FaRegStar } from 'react-icons/fa';
import { IoIosAttach, IoIosMore } from 'react-icons/io';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { MessageBox } from './MessageBox';
import { useState } from 'react';
import { clientAuthAxios } from '@/utils/clientAxios';
import { IoIosSend } from 'react-icons/io';
import { Message } from '@/types/chat';

interface IMessageRoomProps {
  initialMessages: Message[];
}

export const MessageRoom: React.FC<IMessageRoomProps> = ({
  initialMessages,
}: IMessageRoomProps) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendMessage();
  };

  const sendMessage = async () => {
    try {
      const res = await clientAuthAxios().post('/message/send', {
        chatId: '659c25a820a194a56e32e6c6',
        message: inputMessage,
      });
      setInputMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full relative flex flex-col">
      <div className="py-4 px-8 bg-[#FAFBFC] flex justify-between w-full items-center shadow-sm absolute inset-x-0">
        <div className="flex items-center">
          <Avatar sizeClass="h-12 w-12" />
          <p className="font-medium ml-2">John Doe</p>
        </div>
        <div className="flex">
          <div className="w-10 h-10 p-2.5 rounded-full border-1 border-[#DAE0E6] bg-white shadow">
            <FaRegStar className="w-full h-full" />
          </div>
          <div className="w-10 h-10 p-2.5 rounded-full border-1 border-[#DAE0E6] ml-4 bg-white shadow">
            <IoIosMore className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="overflow-y-auto flex flex-col justify-end flex-1 h-full px-4 py-20">
        {/* Message container */}
        {initialMessages.map((message) => (
          <MessageBox message={message} />
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
              className="w-full outline-none text-sm text-gray-500 ml-1 bg-transparent border-none focus:outline-none flex-1"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit">
              <IoIosSend className="w-6 h-6 mx-1 text-neutral-700" />
            </button>
          </form>
          <div className="flex items-center">
            <MdOutlineEmojiEmotions className="w-6 h-6 mx-1 text-neutral-700" />

            <IoIosAttach className="w-6 h-6 mx-1 text-neutral-700" />
          </div>
        </div>
      </div>
    </div>
  );
};
