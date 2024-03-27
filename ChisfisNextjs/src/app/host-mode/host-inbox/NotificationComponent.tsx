"use client";
import React, { useEffect, useState } from 'react';
import Avatar from '@/shared/Avatar';


const NotificationComponent = ({ notifications }: any) => {
  const [selectedNotification, setSelectedNotification] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const handleNotificationClick = (notification: any) => {
    setSelectedNotification(notification);
  };



  return (
    <div className="flex">
      {/* left side */}
      <div className='w-1/2 mobile-res p-1 h-[600px] overflow-y-auto tailwind-scrollbar-hide px-20'>
        <h1 className='text-3xl font-semibold mb-4'>Notifications</h1>
        <nav className='flex py-2 gap-2 mobile-view'>
          <button
            className={`btn px-7 rounded-full ${activeTab === 'all' ? 'bg-[#3d49f3] text-white shadow-md' : 'bg-white text-gray-700 shadow-sm'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`btn py-2 px-7 rounded-full ${activeTab === 'today' ? 'bg-[#3d49f3] text-white shadow-md' : 'bg-white text-gray-700 shadow-sm'}`}
            onClick={() => setActiveTab('today')}
          >
            Today
          </button>
          <button
            className={`btn py-2 px-7 rounded-full ${activeTab === 'lastWeek' ? 'bg-[#3d49f3] text-white shadow-md' : 'bg-white text-gray-700 shadow-sm'}`}
            onClick={() => setActiveTab('lastWeek')}
          >
            Last week
          </button>
          <button
            className={`btn py-2 px-7 rounded-full ${activeTab === 'thisMonth' ? 'bg-[#3d49f3] text-white shadow-md' : 'bg-white text-gray-700 shadow-sm'}`}
            onClick={() => setActiveTab('thisMonth')}
          >
            This month
          </button>
        </nav>


        <h3 className="text-xl font-medium text-[#868484] my-4">Today</h3>
        {notifications.map((item: any, index: any) => (
          <a
            key={index}
            href={item.href}
            onClick={() => handleNotificationClick(item)}
            className="flex p-2 pr-8 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 relative"

          >
            <Avatar
              imgUrl={item.avatar}
              sizeClass="w-8 h-8 sm:w-12 sm:h-12"
            />
            <div className="ml-3 sm:ml-4 space-y-1">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                {item.name}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-400">
                {item.time}
              </p>
            </div>
          </a>
        ))}
      </div>
      {/* right side */}
      <div className='flex flex-1 shadow-md rounded-md bg-white min-h-[600px] mx-4'>
        {selectedNotification ? (
          <div className='w-full border-gray-200 pl-4'>
            <div className='flex items-center space-x-4 py-4'>
              <Avatar
                imgUrl={selectedNotification.avatar}
                sizeClass="w-12 h-12"
              />
              <div>
                <p className='text-lg font-medium text-gray-900 dark:text-gray-200'>
                  {selectedNotification.name}
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {selectedNotification.description}
                </p>
                <p className='text-xs text-gray-400 dark:text-gray-400'>
                  {selectedNotification.time}
                </p>
              </div>
            </div>
            <div className='border-t border-gray-200 py-4'>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Additional Details:
              </p>
              <p className='text-sm text-gray-900 dark:text-gray-200'>
                {selectedNotification.details}
              </p>
            </div>
          </div>
        ) : (
          <h1 className='font-bold flex justify-center items-center ml-52 text-gray-400'>Selected Notification here</h1>
        )}
      </div>
    </div>
  );
};

export default NotificationComponent;
