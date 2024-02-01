"use client";

import { Popover, Transition } from "@headlessui/react";
import { FC, Fragment, useState, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { pusherClient } from '@/utils/pusher';
import { useSession } from '@/hooks/useSession';
import { CalendarIcon, CreditCardIcon } from "@heroicons/react/24/solid";


interface Props {
  className?: string;
}

interface Notification {
  id: string; 
  type: string; 
  title: string; 
  message: string;
  createdAt: string;
  href?: string; 
}

const NotifyDropdown: FC<Props> = ({ className = "" }) => {
  const [notifications_, setNotifications] = useState<Notification[]>([]);
  const { getSession } = useSession();
  const { userId, token } = getSession();

  const getNotifications = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notification/all`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setNotifications(res.data.data.notifications);
  };

  

  const handleNotification = (data:any) => {
    setNotifications((prevNotifications:any) => [data, ...prevNotifications]);
  }

  useEffect(() => {
    getNotifications();
    console.log(userId)
    pusherClient.subscribe(`${userId}-notifications`);
    pusherClient.bind(`notification:new`, handleNotification);

    return () => {
      pusherClient.unsubscribe(`${userId}-notifications`);
      pusherClient.unbind(`notification:new`, handleNotification);
    }

  }, []);

  const getIcon = (type: string) => {
    type = type.toLowerCase();
    if(type.includes('payment')) return <CreditCardIcon className="w-8 h-8 text-blue-500" />
    if(type.includes('booking')) return <CalendarIcon className="w-8 h-8 text-blue-500" />
    return <BellIcon className="w-8 h-8 text-blue-500" />
  }

  return (
    <>
      <Popover className={`relative flex ${className}`}>
        {({ open }) => (
          <>
            <Popover.Button
              className={` ${
                open ? "" : "text-opacity-90"
              } group self-center w-10 h-10 sm:w-12 sm:h-12 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center justify-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative`}
            >
              <span className="w-2 h-2 bg-blue-500 absolute top-2 right-2 rounded-full"></span>
              <BellIcon className="h-6 w-6" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-xs sm:max-w-sm px-4 top-full -right-28 sm:right-0 sm:px-0">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white dark:bg-neutral-800 p-7">
                    <h3 className="text-xl font-semibold">Notifications</h3>
                    {notifications_.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex p-2 pr-8 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 relative"
                      >
                        {getIcon(item.type)}
                        <div className="ml-3 sm:ml-4 space-y-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                            {item.title}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            {item.message}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-400">
                            {new Date(item.createdAt).toLocaleString()}
                          </p>
                        </div>
                        <span className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></span>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default NotifyDropdown;
