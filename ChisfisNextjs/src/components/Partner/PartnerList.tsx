import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { MdVerified } from "react-icons/md";

export interface PartnerProps {
  id: number;
  name: string;
  imageUrl: string;
  age: number;
  gender: string;
  location: string;
  description: string;
}

export interface PartnerListProps {
  partners: PartnerProps[];
  searchKey: string;
}

const PartnerList = ({ partners, searchKey }: PartnerListProps) => {
  const filteredPartners = partners.filter((item) => {
    return item.name.toLowerCase().includes(searchKey.toLowerCase());
  });

  return (
    <>
      <div className="partner-list container">
        {filteredPartners.length > 0 &&
          filteredPartners.map((item: PartnerProps) => (
            <Link
              href={`/partner/${item.id}`}
              key={item.id}
              className="partner-list__item overflow-hidden"
            >
              <Image
                src={item.imageUrl}
                width={296}
                height={285}
                className="md:w-[296px] md:h-auto w-full h-72 "
                alt="partner"
              />
              <div className="partner-list__item-content">
                <div className="flex gap-3 items-center ">
                  <div className="relative h-12 w-12 ">
                    <Image
                      src="https://images.pexels.com/photos/7893740/pexels-photo-7893740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      fill
                      className="rounded-full object-cover "
                      alt="partner"
                    />
                  </div>
                  <div>
                    <p className="name flex items-center gap-2 ">
                      {item.name}{" "}
                      <span>
                        <MdVerified className="text-blue-700" />
                      </span>{" "}
                    </p>
                    <p className="info">
                      {item.age} Years / {item.gender}
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-2 text-black font-medium flex items-center gap-1">
                  {" "}
                  <span>
                    <CiCalendarDate className="text-sm font-medium h-5 w-5" />
                  </span>{" "}
                  01 Apr 23 - 07 Apr 23
                </p>
                <p className="description line-clamp-2">{item.description}</p>
                <p className="location text-black font-medium">
                  Looking Near: <span>{item.location}</span>
                </p>
              </div>
            </Link>
          ))}
      </div>
      {filteredPartners.length === 0 && (
        <p className="my-5 text-base text-slate-600 text-center">
          No partners found
        </p>
      )}
      {filteredPartners.length > 0 && (
        <button type="button" className="btn-load-more">
          Load More
        </button>
      )}
    </>
  );
};

export default PartnerList;
