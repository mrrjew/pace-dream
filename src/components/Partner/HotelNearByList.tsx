import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import room from "@/images/hero-right-3.png";

export interface HotelNearByListProps {
  id: number;
  name: string;
  imageUrl: StaticImageData;
  rating: number;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
}

const hotelNearBy: HotelNearByListProps[] = [
  {
    id: 1,
    name: "Hotel Assenzio",
    imageUrl: room,
    rating: 4.2,
    startDate: "25 Apr 2022",
    endDate: "28 Apr 2022",
    description:
      "But happy to move in with more than that, I'm super easy going and tidy.",
    price: 32,
  },
  {
    id: 2,
    name: "Hotel Assenzio",
    imageUrl: room,
    rating: 4.5,
    startDate: "25 Apr 2022",
    endDate: "28 Apr 2022",
    description:
      "But happy to move in with more than that, I'm super easy going and tidy.",
    price: 36,
  },
  {
    id: 3,
    name: "Hotel Assenzio",
    imageUrl: room,
    rating: 4.4,
    startDate: "25 Apr 2022",
    endDate: "28 Apr 2022",
    description:
      "But happy to move in with more than that, I'm super easy going and tidy.",
    price: 31,
  },
];

const HotelNearByList = () => {
  return (
    <div className="hotel-nearby__list">
      {hotelNearBy.length > 0 &&
        hotelNearBy.map((item: HotelNearByListProps) => (
          <Link
            key={item.id}
            href="/partner/1"
            className="hotel-nearby__list-item"
          >
            <Image
              src={item.imageUrl}
              width={405}
              height={285}
              alt={item.name}
            />
            <div className="item-content">
              <div className="flex items-center justify-between">
                <h4 className="name">{item.name}</h4>
                <p className="flex items-center gap-1 text-black font-semibold text-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M12.7694 5.92569L11.0507 2.93386C10.7316 2.37835 9.93112 2.37569 9.60832 2.92907L7.7947 6.03813C7.55448 6.44993 7.14941 6.73914 6.68193 6.83264L4.20383 7.32826C3.56201 7.45662 3.31192 8.24086 3.76094 8.71709L5.55329 10.6181C5.93656 11.0246 6.09066 11.5961 5.96371 12.1401L5.15243 15.6171C4.98566 16.3318 5.75741 16.8975 6.3888 16.5233L9.48398 14.6891C10.0079 14.3787 10.6594 14.3787 11.1833 14.6891L14.2785 16.5233C14.9099 16.8975 15.6816 16.3318 15.5149 15.6171L14.6965 12.1097C14.5735 11.5825 14.7142 11.0283 15.0739 10.6237L16.8684 8.60483C17.296 8.1238 17.0401 7.36026 16.409 7.23404L13.8877 6.72978C13.4165 6.63553 13.0088 6.34242 12.7694 5.92569Z"
                      stroke="black"
                      stroke-width="1.67"
                      stroke-miterlimit="10"
                    />
                  </svg>
                  {item.rating}
                </p>
              </div>
              <p className="date-info">
                <span>{item.startDate}</span>
                <span className="mx-1">-</span>
                <span>{item.endDate}</span>
              </p>
              <p className="description">{item.description}</p>
              <p className="price">${item.price} / Day</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default HotelNearByList;
