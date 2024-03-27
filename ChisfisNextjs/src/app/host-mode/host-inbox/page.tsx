"use client";
import Link from "next/link";
import NotificationComponent from "./NotificationComponent";
import avatar4 from "@/images/avatars/Image-4.png";
import avatar5 from "@/images/avatars/Image-5.png";
import avatar6 from "@/images/avatars/Image-6.png";

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

const hostInbox = () => {

  return (
    <section className="bg-[#fafafa]">
      <div >
        <div className="h-[7rem] flex bg-[#FFFFFF] w-full px-12 py-10">
          <Link href="/" className="lg:ml-[5rem]">
            <button className="btn rounded-full border border-[#DAE0E6] bg-[#FFFFFF] text-sm px-5 py-3 btn-sm mobile-view ">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-4 md:px-7">
          <div className="">
            <div className="pt-5 pb-16 px-5">
              <NotificationComponent notifications={notifications}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hostInbox;
