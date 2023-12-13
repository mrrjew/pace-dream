import Image from "next/image";
import Link from "next/link";

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
                className="w-full"
                alt="partner"
              />
              <div className="partner-list__item-content">
                <p className="name">{item.name}</p>
                <p className="info">
                  {item.age} Years / {item.gender}
                </p>
                <p className="description">{item.description}</p>
                <p className="location">
                  Looking Near: <span>{item.location}</span>
                </p>
              </div>
            </Link>
          ))}
      </div>
      {filteredPartners.length === 0 && (
        <p className="my-5 text-base text-slate-600 text-center">No partners found</p>
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
