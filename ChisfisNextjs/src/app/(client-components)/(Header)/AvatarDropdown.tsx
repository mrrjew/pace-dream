"use client";

import { useSession } from "@/hooks/useSession";
import Avatar from "@/shared/Avatar";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import * as FiIcons from "react-icons/fi";
import { ApiDrivenIcon } from "@/assets/ApiDrivenIcon";
// import { useFetch } from "@/hooks/useFetch";
import { FiPieChart } from "react-icons/fi";

const {
  FiSettings,
  FiUserCheck,
} = FiIcons;

interface Props {
  className?: string;
}


type HostMenueDashboardType = {
  _id: string
  url: string;
  icon: string
  name: string
  createdAt: string
  updatedAt: string
}




export default function AvatarDropdown({ className = "" }: Props) {
  const [isHost, setIsHost] = useState<boolean>(false);
  // const [hostDashboardMenueList,setHostDashboardMenueList] = useState<Array<HostMenueDashboardType>>([])

  // const [
  //   fetchHostDropdownMenu,
  //   { data: hostMenuData, isLoading: isHostMenuLoading, error: hostMenuError },
  // ] = useLazyGetHostMenuDropdownQuery({});

  // const { data, refetch } = useFetch<Array<HostMenueDashboardType>>({
  //   endpoint: "/host_dashboard_seed/get-host-dashboard",
  //   queryKey: ["host_dashbord_menue"],
  // })

  const handleSwitch = () => {
    setIsHost(!isHost);
  };

  const { getSession,  handleLogout } = useSession();
  // const { clearUser }: any = useProfile();
  const { token, userInfo } = getSession();

  // const router = useRouter();

  // useEffect(() => {
  //   // fetchHostDropdownMenu({});
  //   refetch()
  // }, [token]);

  // const handleLogout = async () => {
  //   const auth = getAuth(app);
  //   await auth.signOut();
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   if (res.ok) {
  //     clearSession();
  //     clearUser();
  //     setTimeout(() => {
  //       router.push("/auth/login");
  //     }, 10);
  //   }
  // };

  // dropdown menu list
  const dropdownMenu = {
    account: token ?  {
        url: "/account",
        name: "My Account",
        icon:<MyAccountSvg/>
      } :  {
        url: "/auth/login",
        name: "Account",
        icon:<LoginSvg/>
    },

    hostMenuList: {
      account: token ? {
        name: "My Account",
        icon: "AiOutlineUser",
        url: "/acc-setting"
    } : {
      url: "/auth/login",
      name: "Account",
      icon:<LoginSvg/>
    },
      others: [ 
        {
          name: "Bookings & Listings",
          icon: "BsBookmark",
          url: "/host-mode/booking"
        },
        {
          name: "Business Insight",
          icon: <FiPieChart size={22} className="ml-0.5" />,
          url: "/host-mode/host-business"
        },
        {
            name: "Transaction history",
            icon: "BsClipboard",
            url: "/transaction-activity"
        },
        {
            name: "Gift card",
            icon: "AiOutlineGift",
            url: "/"
        },
        {
            name: "Contact support",
            icon: "RiHeadphoneLine",
            url: "/contact-us"
        }
        ],
    },
    guestMenuList: [
      {
        url: "/author",
        name: "My Bookings",
        icon: <MyBookingsSvg />
      },
      {
        url: "/account-savelists",
        name: "Wishlist",
        icon: <WhiteListSvg />
      },
      {
        url: "/roommate",
        name: "My Roommate",
        icon: <FiUserCheck size={22} className="ml-0.5" />
      }
    ],

    otherMenuItems: [
      {
        url: "/help-center",
        name: "Help",
        icon:<HelpSvg/>
      },
      {
        url: "/acc-setting",
        name: "Settings",
        icon: <FiSettings size={22} className="ml-0.5" />
      },
      {
        url: "/#",
        name: token ? "Logout" : "",
        icon: <LogOutSvg/>,
        onClick:handleLogout
      }
    ]
  }



  return (
    <>
      <Popover className={`AvatarDropdown relative flex ${className}`}>
        {({ open }) => (
          <>
            <Popover.Button
              className={`self-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center`}
            >
              {/* <Avatar sizeClass="w-8 h-8 sm:w-9 sm:h-9" /> */}
              <Avatar sizeClass="w-8 h-8 sm:w-9 sm:h-9 bg-[#DDD7EF]" />
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
              <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 top-full -right-10 sm:right-0 sm:px-0">
                <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
                    <div className="flex items-center space-x-3">
                      <Avatar sizeClass="w-12 h-12" />

                      <div className="flex-grow">
                        <h4 className="font-semibold">
                          {userInfo && userInfo.first_name
                            ? `${userInfo.first_name} ${userInfo.last_name}`
                            : "John Doe"}
                        </h4>
                        {/* <p className="text-xs mt-0.5">{user?.email}</p> */}
                      </div>
                    </div>

                    <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />
                    <button
                          onClick={handleSwitch}
                          className={`btn p-2 rounded-full text-white bg-[#5043d8] text-sm font-semibold`}
                        >
                         {isHost ? "Switch to guest mode" : "Switch to host mode"}
                    </button>
                    {/* account menu for guest */}
                    {!isHost && <MenuLink name={dropdownMenu.account.name} url={dropdownMenu.account.url} icon={dropdownMenu.account.icon} /> }
                    {isHost && token && <HostRemotMenuLink  name={dropdownMenu.hostMenuList.account.name} url={dropdownMenu.hostMenuList.account.url} icon={dropdownMenu.hostMenuList.account.icon as string} /> }
                    {isHost && !token &&  <MenuLink name={dropdownMenu.hostMenuList.account.name} url={dropdownMenu.hostMenuList.account.url} icon={dropdownMenu.hostMenuList.account.icon} />}
                    
                    {/* guest & host other menu list */}
                    {
                      isHost ? dropdownMenu.hostMenuList.others?.map((menu)=>{
                        if(typeof menu.icon === "string"){
                          return (<HostRemotMenuLink key={menu.url} name={menu.name} url={menu.url} icon={menu.icon}   />)
                        }
                        return (
                          <MenuLink key={menu.url} name={menu.name} url={menu.url} icon={menu.icon} />
                        )
                      }) :
                      dropdownMenu.guestMenuList.map((menu)=>{
                        return (
                          <MenuLink key={menu.url} name={menu.name} url={menu.url} icon={menu.icon} />
                        )
                      })
                    }
                     <div className="w-full border-b border-neutral-200 dark:border-neutral-700" />
                    {/* other menu list */}
                    {
                      dropdownMenu.otherMenuItems.map((menu)=>{
                        if(!menu?.name){
                          return null;
                        }
                        return (
                          <MenuLink key={menu.url} name={menu.name} url={menu.url} icon={menu.icon} onClick={menu?.onClick} />
                        )
                      })
                    }

                    {/* ------------------ 1 --------------------- */}

                    {/* {!isHost && (
                      <> */}
                        {/* <button
                          onClick={handleSwitch}
                          className={`btn p-2 rounded-full text-white bg-[#5043d8] text-sm font-semibold`}
                        >
                          Switch to host mode
                        </button> */}

                        {/* {token ? (
                          <Link
                            href={"/account"}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium ">
                                {"My Account"}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            href={"/auth/login"}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium ">{"Login"}</p>
                            </div>
                          </Link>
                        )} */}

                        {/* ------------------ 2 --------------------- */}
                        {/* <Link
                          href={"/author"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M8 12.2H15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 16.2H12.38"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium ">
                              {"My bookings"}
                            </p>
                          </div>
                        </Link> */}

                        {/* ------------------ 2 --------------------- */}
                        {/* <Link
                          href={"/account-savelists"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium ">{"Wishlist"}</p>
                          </div>
                        </Link> */}

                        {/* <Link
                          href={"/roommate"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <FiUserCheck size={22} className="ml-0.5" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium ">
                              {"My Roommate"}
                            </p>
                          </div>
                        </Link> */}
                      {/* </>
                    )} */}

                    {/* for host mode */}

                    {/* {isHost && ( */}
                      {/* <> */}
                        {/* <button
                          onClick={handleSwitch}
                          className="btn p-2 rounded-full text-white bg-[#5043d8] text-sm font-semibold "
                        >
                          Switch to guest mode
                        </button>
                        {
                          data?.map((hostMenuItem) => (<Link
                            key={hostMenuItem._id}
                            href={hostMenuItem.url as any}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                              <ApiDrivenIcon iconName={hostMenuItem.icon} />
                            </div>
                            <div className="mt-1 ml-2">
                              <p className="text-sm font-medium ">{hostMenuItem.name}</p>
                            </div>
                          </Link>))
                        } */}




                        {/* {token ? (
                          <Link
                            href={"/account"}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium ">
                                {"My Account"}
                              </p>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            href={"/auth/login"}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium ">{"Login"}</p>
                            </div>
                          </Link>
                        )} */}

                        {/* ------------------ Host Dashboard --------------------- */}

                        {/* <Link
                          href={"/host-mode/host-dashboard"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <TbLayoutDashboard
                              size={22}
                              className="mr-2 ml-0.5"
                            />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">
                              {"Host Dashboard"}
                            </p>
                          </div>
                        </Link> */}

                        {/* ------------------ Booking--------------------- */}

                        {/* <Link
                          href={"/host-mode/booking"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <BsBookmark size={22} className="mr-2 ml-0.5" />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">{"Booking"}</p>
                          </div>
                        </Link> */}

                        {/* ------------------ Listings --------------------- */}

                        {/* <Link
                          href={"/host-mode/host-inbox"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <FiLayout size={22} className="mr-2 ml-0.5" />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">{"Listings"}</p>
                          </div>
                        </Link> */}

                        {/* ------------------ Drafts --------------------- */}

                        {/* <Link
                          href={"/host-mode/host-inbox"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <RiDraftLine size={22} className="mr-2 ml-0.5" />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">{"Drafts"}</p>
                          </div>
                        </Link> */}

                        {/* ------------------ Inbox --------------------- */}

                        {/* <Link
                          href={"/host-mode/host-inbox"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <BsChat size={22} className="mr-2 ml-0.5" />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">{"Inbox"}</p>
                          </div>
                        </Link> */}

                        {/* ------------------ Space --------------------- */}

                        {/* <Link
                          href={"/host-mode/host-space"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <RiBuildingLine size={22} className="mr-2 ml-0.5" />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">{"Space"}</p>
                          </div>
                        </Link> */}

                        {/* ------------------ Business --------------------- */}

                        {/* <Link
                          href={"/host-mode/host-business"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <FiPieChart size={22} className="mr-2 ml-0.5" />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">{"Business"}</p>
                          </div>
                        </Link> */}

                        {/* ------------------ More --------------------- */}

                        {/* <Link
                          href={"/"}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                            <BsThreeDots size={22} className="mr-2 ml-0.5" />
                          </div>
                          <div className="ml-2">
                            <p className="text-sm font-medium ">{"More"}</p>
                          </div>
                        </Link> */}
                      {/* </>
                    )} */}

                    {/* <div className="w-full border-b border-neutral-200 dark:border-neutral-700" /> */}

                    {/* ------------------ 2 --------------------- */}
                    {/* <div className='flex items-center justify-between p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'>
                      <div className='flex items-center'>
                        <div className='flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M12.0001 7.88989L10.9301 9.74989C10.6901 10.1599 10.8901 10.4999 11.3601 10.4999H12.6301C13.1101 10.4999 13.3001 10.8399 13.0601 11.2499L12.0001 13.1099'
                              stroke='currentColor'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M8.30011 18.0399V16.8799C6.00011 15.4899 4.11011 12.7799 4.11011 9.89993C4.11011 4.94993 8.66011 1.06993 13.8001 2.18993C16.0601 2.68993 18.0401 4.18993 19.0701 6.25993C21.1601 10.4599 18.9601 14.9199 15.7301 16.8699V18.0299C15.7301 18.3199 15.8401 18.9899 14.7701 18.9899H9.26011C8.16011 18.9999 8.30011 18.5699 8.30011 18.0399Z'
                              stroke='currentColor'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M8.5 22C10.79 21.35 13.21 21.35 15.5 22'
                              stroke='currentColor'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium '>{'Dark theme'}</p>
                        </div>
                      </div>
                      <SwitchDarkMode2 />
                    </div> */}

                    {/* ------------------ 2 --------------------- */}
                    {/* <Link
                      href={"/#"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.89999 4.92993L8.43999 8.45993"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.89999 19.07L8.43999 15.54"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.05 19.07L15.51 15.54"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.05 4.92993L15.51 8.45993"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Help"}</p>
                      </div>
                    </Link>
                    <Link
                      href={"/acc-setting"}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                        <FiSettings size={22} className="ml-0.5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium ">{"Settings"}</p>
                      </div>
                    </Link> */}

                    {/* ------------------ 2 --------------------- */}
                    {/* {token ? (
                      <Link
                        href={"/#"}
                        onMouseDown={handleLogout}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 12H3.62"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium ">{"Log out"}</p>
                        </div>
                      </Link>
                    ) : (
                      ""
                    )} */}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}


function HostRemotMenuLink(prop:Partial<HostMenueDashboardType>){
  const {name,icon,url } = prop
  return (
  <Link
      href={url as any}
      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
  <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
    <ApiDrivenIcon iconName={icon as string} />
  </div>
  <div className="mt-1 ml-2">
    <p className="text-sm font-medium ">{name}</p>
  </div>
  </Link>
  )
}

function MenuLink(props:{
  icon:any,name:string,url:string,
  onClick?:()=>void
}){
  const {icon,name,url,onClick} = props
  return (
    <Link
      href={url as any}
      onMouseDown={onClick}
      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
      <div className="flex items-center justify-center flex-shrink-0 text-neutral-500 dark:text-neutral-300">
          {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium ">
          {`${name}`}
        </p>
      </div>
    </Link>
  )
}
// my account svg
function MyAccountSvg(){

  return (
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

// login svg
function LoginSvg(){
  return (
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

// my bookings svg
function MyBookingsSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 12.2H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16.2H12.38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// whitelist svg
function WhiteListSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// help svg
function HelpSvg(){

  return (
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.89999 4.92993L8.43999 8.45993"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.89999 19.07L8.43999 15.54"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.05 19.07L15.51 15.54"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.05 4.92993L15.51 8.45993"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

// settings svg
function LogOutSvg(){


  return (
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    <path
    d="M15 12H3.62"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    <path
    d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    />
    </svg>
)
}



