"use client";

import React, { FC, use, useState, useEffect } from "react";
import {
  PaperAirplaneIcon,
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import { SearchBox } from "../search-box";
import { ContactsList } from "../contacts";
import { Messages } from "../messages";

export interface ChatPageProps {}

const ChatPage: FC<ChatPageProps> = ({}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const contacts = [
    {
      id: 1,
      name: "John Doe",
      lastSeen: "Online",
      lastMessage: "Hello, how are you?",
      profilePicture: "https://placekitten.com/40/40", // Sample image URL
    },
    {
      id: 2,
      name: "Alice Smith",
      lastSeen: "1 hour ago",
      lastMessage: "Sure, I can make it.",
      profilePicture: "https://placekitten.com/41/41", // Sample image URL
    },
    {
      id: 3,
      name: "Bob Johnson",
      lastSeen: "2 hours ago",
      lastMessage: "What time is the meeting?",
      profilePicture: "https://placekitten.com/42/42", // Sample image URL
    },
    {
      id: 4,
      name: "Emma Williams",
      lastSeen: "3 hours ago",
      lastMessage: "I will check and let you know.",
      profilePicture: "https://placekitten.com/43/43", // Sample image URL
    },
    {
      id: 5,
      name: "Chris Davis",
      lastSeen: "Online",
      lastMessage: `Let's catch up soon!`,
      profilePicture: "https://placekitten.com/44/44", // Sample image URL
    },
    // Add more contacts as needed
  ];

  const selectedContact = contacts[0];

  const messages = [
    { message: "Temporary message from Another User", sender: "other" },
    { message: "Temporary message from Yourself", sender: "me" },
    { message: "Temporary message from Another User", sender: "other" },
    { message: "Temporary message from Yourself", sender: "me" },
    { message: "Temporary message from Another User", sender: "other" },
    { message: "Temporary message from Yourself", sender: "me" },
    { message: "Temporary message from Another User hqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqjkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", sender: "other" },
    { message: "Temporary message from Yourself", sender: "me" },
    { message: "Temporary message from Another User", sender: "other" },
    { message: "Temporary message from Yourself", sender: "me" },
    { message: "Temporary message from Another User", sender: "other" },
    { message: "Temporary message from Yourself aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ddddddddddddddddddddddddddddddddddddddddd", sender: "me" },
    { message: "Temporary message from Another User", sender: "other" },
    { message: "Temporary message from Yourself", sender: "me" },
  ];

  const renderSection = () => {
    return (
      <div className="flex justify-between w-70 h-screen lg:h-[90vh]">
        <div className="w-1/4 rounded-md border-purple-500 p-4 overflow-y-auto scrollbar-hide">
          <h2 className="text-lg mb-2">Inbox</h2>

          <SearchBox />
          <div>
            <ContactsList contacts={contacts} />
          </div>
        </div>

        {/* Chat */}
        <div className="w-3/4  flex flex-col border-l">
          {/* Top Section (Fixed) */}
          <div className="flex items-center border-b mb-4 p-2 bg-[#FAFBFC]">
            <img
              src={selectedContact.profilePicture}
              alt={selectedContact.name}
              className="w-12 h-12 rounded-md mr-4"
            />
            <div>
              <div className="text-lg">
                {selectedContact.name}
              </div>
            </div>
          </div>

          {/* Middle Section (Messages) */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-2">
            <Messages messages={messages} />
          </div>

          {/* Bottom Section (Fixed) */}
          <div className="flex items-center border-t p-4 mt-4 bg-[#FAFBFC]">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 text-sm rounded-md mr-2 shadow-lg border-none"
            />

            <button className="text-black px-4 py-2 rounded-md ml-2">
              <PaperClipIcon className="w-5 h-5" />
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <div className={`nc-ChatPage `}>{renderSection()}</div>;
};

export default ChatPage;
