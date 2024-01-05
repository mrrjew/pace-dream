import React from 'react';
import { EmptyState } from '../EmptyState';
import { ChatList } from '../ChatList';
import { IoSearchOutline } from 'react-icons/io5';
import { MessageRoom } from '../MessageRoom';

const SearchBox: React.FC<{}> = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center border border-gray-200 rounded-full px-4 py-1 w-full">
        <IoSearchOutline className="w-6 h-6" />
        <input
          type="text"
          placeholder="Search Inbox"
          className="w-full outline-none text-sm text-gray-500 ml-1 bg-transparent border-none"
        />
      </div>
    </div>
  );
};

const InboxPage: React.FC<{}> = () => {
  return (
    <div className="grid grid-cols-12 h-screen lg:h-[90vh]">
      <div className="col-span-12 lg:col-span-3 h-full overflow-y-auto">
        <h2 className="ml-4 text-lg mt-2">All Messages</h2>
        <div className="my-2 px-4">
          <SearchBox />
        </div>
        <ChatList />
      </div>
      <div className="hidden lg:col-span-9 lg:block lg:border-l-2 lg:border-[#DAE0E6] h-full relative overflow-y-hidden">
        {/* <EmptyState /> */}
        <MessageRoom />
      </div>
    </div>
  );
};

export default InboxPage;
