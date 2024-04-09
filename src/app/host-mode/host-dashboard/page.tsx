import Link from "next/link";
import { AiOutlineGift, AiOutlineUser } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsClipboard, BsFileCheck, BsFileEarmarkMinus } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { RiHeadphoneLine } from "react-icons/ri";

const HostDashboard = () => {

  
  const dashboardMenuItems: {
    title: string;
    icon: JSX.Element;
  }[] = [
    {
      title: "Account",
      icon: <AiOutlineUser size={30} />,
    },
    {
      title: "Transaction history",
      icon: <BsClipboard size={30} />,
    },
    {
      title: "Tax information",
      icon: <BsFileEarmarkMinus size={30} />,
    },
    {
      title: "Gift card",
      icon: <AiOutlineGift size={30} />,
    },
    {
      title: "How Totel works",
      icon: <FiKey size={30} />,
    },
    {
      title: "Contact support",
      icon: <RiHeadphoneLine size={30} />,
    },
    {
      title: "Legal",
      icon: <BsFileCheck size={30} />,
    },
  ];

  return (
    <section>
      <div className="md:px-28">
        <Link href="/">
         <button className="btn mt-10 rounded-full border border-[#DAE0E6] font-medium px-5 py-2 btn-sm mobile-view">
          Back    
        </button>         
        </Link>

        <div className="card relative shadow my-10  rounded-b-2xl mobile-res">
          <div className="w-full h-32 rounded-t-2xl bg-gradient-to-r from-[#9786f3] to-[#e7bfae]"></div>
          <div className="card-body h-24">
            <div className="avatar absolute top-20 left-14">
              <div className="w-28 border-white border-8 rounded-full">
                <img
                  src="https://i.ibb.co/mHnRpq9/image.png"
                  className=""
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-10 ml-8">
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Sihyun Chae</h3>
                <p className="font-medium text-[#4b4949] mobile-view">sihyunchae@gmail.com</p>
                <p className="text-[#2a4ef1] font-medium desktop-view"> View and edit profile</p>
              </div>
              <div className="mr-24 mobile-view">
                <Link href="/">
                <button className="btn rounded-full bg-[#d0cef7] text-[#3c58f7] border-none px-7 py-2 btn-sm">
                  <div className="flex gap-2 font-medium">
                    <BiEdit size={18} className="mt-0.5" />
                  <p> Edit</p>
                  </div>

                 
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-[#F9F9FF] shadow-xl mb-14">
            <div className="pt-5 pb-7 px-20">
              <ul className="menu rounded-box">
                {dashboardMenuItems.map((item, i) => (
                  <li
                    key={i}
                    className={`flex gap-4 text-[#525151] flex-row py-5 hover:bg-[#f0f0f0] ${
                      i !== 6 && "border-b"
                    } border-[#6269DF33] items-center`}
                  >
                    <span>{item.icon}</span>
                    <p className="text-2xl mt-1">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostDashboard;
