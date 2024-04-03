import Image from "next/image";
import Link from "next/link";
import statusIcon from "@/images/status-icon.svg";
import profileImg from "@/images/avatars/Image-1.png";
import { FaRegCalendar } from "react-icons/fa";

export interface RoomMateProps {
  id: number;
  name: string;
  imageUrl: string;
  age: number;
  gender: string;
  location: string;
  description: string;
}

export interface RoomMateListProps {
  partners: RoomMateProps[];
  searchKey: string;
  showMap: boolean;
}

const RoomMateList = ({ partners, searchKey, showMap }: RoomMateListProps) => {
  const filteredPartners = partners.filter((item) => {
    return item.name.toLowerCase().includes(searchKey.toLowerCase());
  });

  let customClass = "partner-list_item";
  let justifyContent = "";

  if (showMap) {
    customClass = "test__item";
    justifyContent = "lg:justify-evenly";
  } else {
    customClass = "partner-list_item";
    justifyContent = "";
  }
  return (
    <>
      <div
        className={`lg:flex min-w-[271px] lg:flex-wrap ${justifyContent} rounded-lg lg:w-full mx-auto w-[296px] flex-wrap flex gap-7`}
      >
        {filteredPartners.length > 0 &&
          filteredPartners.map((item: RoomMateProps) => (
            <Link
              href={`/roommate/${item.id}`}
              key={item.id}
              className={` ${customClass} border rounded-lg w-[296px] overflow-hidden`}
            >
              <Image
                src={item.imageUrl}
                width={296}
                height={233}
                className="w-full rounded-t-lg  h-[233px]"
                alt="partner"
              />
              <div className="partner-list__item-content">
                <div className="flex gap-2">
                  <div className="items-center">
                    <Image
                      src={profileImg}
                      width={35}
                      height={35}
                      alt="verified"
                      className="rounded-full mt-1"
                    />
                  </div>
                  <div className="">
                    <div className="flex gap-1 items-center">
                      <p className="font-semibold text-[17px]">{item.name}</p>
                      <Image
                        src={statusIcon}
                        width={16}
                        height={16}
                        alt="verified"
                      />
                    </div>
                    <p className="text-[11px] text-[#757575]">
                      {item.age} Years / {item.gender}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegCalendar className="w-[11px] h-[11px]" />
                  <p className="text-[11px]">01 Apr 23 - 07 Apr 23</p>
                </div>
                <div className="mt-[7px]">
                  <p className="text-[11px] leading-5 text-[#757575]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-2 mb-6">
                  <p className="text-[13px] leading-3">
                    Looking Near: <span>{item.location}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {filteredPartners.length === 0 && (
        <p className="my-5 text-base text-slate-600 text-center">
          No partners found
        </p>
      )}
    </>
  );
};

export default RoomMateList;
