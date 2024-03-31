'use client'
import Link from "next/link"
import { useState } from "react";
import NotificationComponent from "./NotificationComponent";
import MatchedRoommatesComponent from "./MatchedRoommatesComponent";

const hostInbox = () => {

  const [activeMenuItem, setActiveMenuItem] = useState('Matched Roommates')


  const handleMenuItemClick = (menuItem:string) => {
    setActiveMenuItem(menuItem);
  };


  let activeComponent;
  if (activeMenuItem === "Matched Roommates") {
    activeComponent = <MatchedRoommatesComponent/>
  } else if (activeMenuItem === "Notifications") {
    activeComponent = <NotificationComponent/>
   }


  return (
    <section>
      <div className="md:px-28">
      <Link href="/">
        <button  className="btn mt-10 rounded-full border border-[#DAE0E6] font-medium px-5 py-2 btn-sm mobile-view">Back</button>      
       </Link>

        <div className="flex items-center justify-between mb-10 mt-14 heading-alignment">
          <h2 className="text-3xl font-semibold">Inbox</h2>
        </div>
        <div>

          <div className="card bg-[#F9F9FF] shadow-2xl mb-14 rounded-t-2xl">
            <nav className="flex gap-2 border-b-2">
                <h1
                  className={`btn font-medium px-9 py-3 
                  ${ activeMenuItem === "Matched Roommates" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer" }  curveBorder`}
                 onClick={() => handleMenuItemClick("Matched Roommates")}>Matched Roommates</h1>

                <h1 className={`btn font-medium px-9 py-3 
                ${ activeMenuItem === "Notifications" ? " bg-[#cdcaf7] text-[#463ed6]" : "bg-[#F9F9FF] text-[#615e5e] cursor-pointer" }`}
                 onClick={() => handleMenuItemClick("Notifications")}>Notification</h1>
            </nav>

            <div className="px-20 pt-5 pb-16">
                {activeComponent}            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hostInbox;