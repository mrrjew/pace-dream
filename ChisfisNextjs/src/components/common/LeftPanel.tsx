import MultiLinks from "./NavLinks/MultiLinks";
import { ReactNode, FC, useState, useEffect } from "react";
import { PathName } from "@/routers/types";
import Link from "next/link";
import SingleLinks from "./NavLinks/SingleLinks";
import { ImCancelCircle } from "react-icons/im";
import { IoClose } from "react-icons/io5";

interface Link {
  path: PathName;
  name: string;
  icon?: ReactNode;
}

interface LinkData {
  title: string;
  id: number;
  links: Link[];
  icon?: ReactNode;
}
interface SingleLinkData {
  title: string;
  id: number;
  links: PathName;
  icon?: ReactNode;
}

interface LeftPanelProps {
  multiLinksData: LinkData[];
  singleLinkData: SingleLinkData[];
  show: Boolean;
  setLeftPanelShow: (value: boolean) => void;
}

const LeftPanel = ({
  multiLinksData,
  singleLinkData,
  show,
  setLeftPanelShow,
}: LeftPanelProps) => {
  const [openLinkId, setOpenLinkId] = useState<number>(-1);

  const toggleSubLinks = (linkId: number) => {
    setOpenLinkId((prevOpenLinkId) =>
      prevOpenLinkId === linkId ? -1 : linkId
    );
  };

  // Add useEffect to toggle body class based on show prop
  useEffect(() => {
    if (show) {
      document.body.classList.add("panel-open"); // Add class to body to prevent scrolling
    } else {
      document.body.classList.remove("panel-open"); // Remove class to enable scrolling
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove("panel-open");
    };
  }, [show]);

  return (
    <div
      className={`lg:relative lg:flex absolute z-[20] lg:min-h-[100%] h-[100vh] lg:w-[16rem] w-[100%]  flex-col duration-300 ${
        show ? " bg-overlay flex  " : "lg:background-white hidden "
      }   `}
    >
      <div
        className={`relative flex flex-col border-r-2 py-[1rem] border-[#DAE0E6] xl:w-[16rem] w-[14rem] bg-white h-full ${
          show
            ? " flex translate-x-[0%] "
            : "lg:flex lg:translate-x-[0%] translate-x-[-200%] "
        } duration-300 `}
      >
        <div
          onClick={() => setLeftPanelShow(!show)}
          className={` ${
            show ? "flex" : "hidden"
          } text-[#5527D7] bg-white w-[2rem] h-[2rem] rounded-full justify-center items-center text-[1.5rem] absolute right-[-3rem] lg:hidden cursor-pointer `}
        >
          <IoClose />
        </div>
        {multiLinksData.map((linkData, index) => (
          <MultiLinks
            key={index}
            linkData={linkData}
            isOpen={openLinkId === linkData.id}
            toggleSubLinks={toggleSubLinks}
          />
        ))}
        {singleLinkData.map((data, index) => (
          <SingleLinks
            key={index}
            singleLinkData={data}
            isOpen={openLinkId === data.id}
            toggleSubLinks={toggleSubLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
