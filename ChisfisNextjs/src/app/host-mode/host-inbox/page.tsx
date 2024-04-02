'use client'
import Link from "next/link"
import { useState } from "react";
import NotificationComponent from "./NotificationComponent";
import FriendshipReq from "./FriendshipReq";

const hostInbox = () => {

  const [activeMenuItem, setActiveMenuItem] = useState('Friendship Requests')


  const handleMenuItemClick = (menuItem:string) => {
    setActiveMenuItem(menuItem);
  };


  let activeComponent;
  if (activeMenuItem === "Friendship Requests") {
    activeComponent = <FriendshipReq/>
  } else if (activeMenuItem === "Notifications") {
    activeComponent = <NotificationComponent/>
   }


  return (
    <section>
      <div className="md:px-28">
      <Link href="/">
        <button  className="btn mt-10 rounded-full border border-[#DAE0E6] font-medium px-5 py-2 btn-sm mobile-view">Back</button>      
       </Link>

        <div className="flex mt-14 mb-10 items-center justify-between heading-alignment">
          <h2 className="text-3xl font-semibold">Inbox</h2>
        </div>
        <div>

          <div className="card bg-[#F9F9FF] shadow-2xl mb-14 rounded-t-2xl">
            <nav className="flex gap-2 border-b-2">
                <h1
                  className={`btn font-medium px-9 py-3 
                  ${ activeMenuItem === "Friendship Requests" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer" }  curveBorder`}
                 onClick={() => handleMenuItemClick("Friendship Requests")}>Friendship Requests</h1>

                <h1 className={`btn font-medium px-9 py-3 
                ${ activeMenuItem === "Notifications" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer" }`}
                 onClick={() => handleMenuItemClick("Notifications")}>Notifications</h1>
            </nav>

            <div className="pt-5 pb-16 px-20">
                {activeComponent}            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hostInbox;
