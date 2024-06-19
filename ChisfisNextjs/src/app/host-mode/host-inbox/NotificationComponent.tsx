import React from "react";
import avatar4 from "@/images/avatars/Image-4.png";
import avatar5 from "@/images/avatars/Image-5.png";
import avatar6 from "@/images/avatars/Image-6.png";
import Avatar from "@/shared/Avatar";

const notifications = [
  {
    name: "Eden Tuan",
    description: "Measure actions your users take",
    time: "3 minutes ago",
    href: "##",
    avatar: avatar4,
  },
  {
    name: "Leo Messi",
    description: "Create your own targeted content",
    time: "1 minute ago",
    href: "##",
    avatar: avatar5,
  },
  {
    name: "Leo Kante",
    description: "Keep track of your growth",
    time: "3 minutes ago",
    href: "##",
    avatar: avatar6,
  },
];

const NotificationComponent = () => {
  return (
    <div className="flex">
      <div className="w-1/2 md:border-r-4 mobile-res">
        <nav className="flex gap-4 mobile-view">
          <button className="btn py-2 px-7 bg-[#3d49f3] text-white rounded-full">
            All
          </button>
          <button className="btn py-2 px-7 bg-[#e1e2e4] font-medium rounded-full">
            Today
          </button>
          <button className="btn py-2 px-7 bg-[#e1e2e4] font-medium rounded-full">
            Last week
          </button>
          <button className="btn py-2 px-7 bg-[#e1e2e4] font-medium rounded-full">
            This month
          </button>
        </nav>

        <h3 className="text-xl font-medium text-[#868484] my-4">Today</h3>
        {notifications.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative flex p-2 pr-8 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
          >
            <Avatar imgUrl={item.avatar} sizeClass="w-8 h-8 sm:w-12 sm:h-12" />
            <div className="ml-3 space-y-1 sm:ml-4">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                {item.name}
              </p>
              <p className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                {item.description}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-400">
                {item.time}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex mobile-view">
        <h1 className="flex items-center justify-center font-bold text-gray-400 ml-52">
          Selected Notification here
        </h1>
      </div>
    </div>
  );
};

export default NotificationComponent;
