"use client"
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import blob from "@/images/blobPattern.png";
import londonImg from "@/images/browseByDestination/london.jpg"

const cardData = {
    Room: [
        {
            id: 1,
            img: londonImg,
            title: "Best Western Cedars",
            address: "1 Anzinger Court",
            price: "$250",
            buttonText: "Stock"
        },
        {
            id: 2,
            img: londonImg,
            title: "Luxury Suite",
            address: "5 Buckingham Palace Rd",
            price: "$500",
            buttonText: "Stock"
        },
        {
            id: 3,
            img: londonImg,
            title: "Cozy Apartment",
            address: "10 Hyde Park Place",
            price: "$150",
            buttonText: "Stock"
        },
        {
            id: 4,
            img: londonImg,
            title: "Elegant Mansion",
            address: "20 Kensington Gardens",
            price: "$800",
            buttonText: "Stock"
        },
        {
            id: 5,
            img: londonImg,
            title: "Modern Loft",
            address: "15 Mayfair St",
            price: "$300",
            buttonText: "Stock"
        },
    ],
    Restroom: [
        {
            id: 1,
            img: londonImg,
            title: "Restroom Alpha",
            address: "1 Restroom Ave",
            price: "$100",
            buttonText: "Stock"
        },
        {
            id: 2,
            img: londonImg,
            title: "Restroom Beta",
            address: "2 Restroom St",
            price: "$80",
            buttonText: "Stock"
        },
        {
            id: 3,
            img: londonImg,
            title: "Restroom Delta",
            address: "3 Restroom Ln",
            price: "$120",
            buttonText: "Stock"
        },
        {
            id: 4,
            img: londonImg,
            title: "Restroom Gamma",
            address: "4 Restroom Blvd",
            price: "$90",
            buttonText: "Stock"
        },
        {
            id: 5,
            img: londonImg,
            title: "Restroom Epsilon",
            address: "5 Restroom Rd",
            price: "$110",
            buttonText: "Stock"
        },
    ],
    "EV Parking": [
        {
            id: 1,
            img: londonImg,
            title: "EV Parking 1",
            address: "1 EV Parking Dr",
            price: "$50",
            buttonText: "Stock"
        },
        {
            id: 2,
            img: londonImg,
            title: "EV Parking 2",
            address: "2 EV Parking Blvd",
            price: "$40",
            buttonText: "Stock"
        },
        {
            id: 3,
            img: londonImg,
            title: "EV Parking 3",
            address: "3 EV Parking Ln",
            price: "$60",
            buttonText: "Stock"
        },
        {
            id: 4,
            img: londonImg,
            title: "EV Parking 4",
            address: "4 EV Parking Rd",
            price: "$45",
            buttonText: "Stock"
        },
        {
            id: 5,
            img: londonImg,
            title: "EV Parking 5",
            address: "5 EV Parking Ave",
            price: "$55",
            buttonText: "Stock"
        },
    ],
    Parking: [
        {
            id: 1,
            img: londonImg,
            title: "Parking Lot Alpha",
            address: "1 Parking Lot Ave",
            price: "$20",
            buttonText: "Stock"
        },
        {
            id: 2,
            img: londonImg,
            title: "Parking Lot Beta",
            address: "2 Parking Lot Blvd",
            price: "$15",
            buttonText: "Stock"
        },
        {
            id: 3,
            img: londonImg,
            title: "Parking Lot Delta",
            address: "3 Parking Lot St",
            price: "$25",
            buttonText: "Stock"
        },
        {
            id: 4,
            img: londonImg,
            title: "Parking Lot Gamma",
            address: "4 Parking Lot Rd",
            price: "$18",
            buttonText: "Stock"
        },
        {
            id: 5,
            img: londonImg,
            title: "Parking Lot Epsilon",
            address: "5 Parking Lot Ln",
            price: "$22",
            buttonText: "Stock"
        },
    ],
};





const TImeBasedMobile = () => {
    const [activeCategory, setActiveCategory] = useState("Room");

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    const renderBlobImage = (category: string) => {
        if (category === activeCategory) {
            return <Image src={blob} alt="blob" className="h-[50px] w-[20px]" />;
        } else {
            return null;
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        speed: 500,
        cssEase: "linear",
    };

    return (
        <div className="h-fit my-20 mx-auto w-screen ">
            <div className="mx-2">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl">Time Based</p>
                    <p className="font-medium text-sm text-[#666666]">View All</p>
                </div>
                <p className="text-[#666666] text-[13px]">
                    Help you to find what you needed.
                </p>
            </div>
            {/* Categories */}
            <div className="flex mt-4 gap-4">
                <div className="-mt-1">
                    <div className="flex flex-col -ml-1 gap-4 w-[35px] text-[#666666] text-sm font-semibold">
                        <div className={`flex items-center h-fit ${activeCategory !== "Room" && "ml-4"}`}>
                            {renderBlobImage("Room")}
                            <p className={`lr -rotate-180 ${activeCategory === "Room" && "font-bold"}`} onClick={() => handleCategoryClick("Room")}>Room</p>
                        </div>
                        <div className={`flex items-center ${activeCategory !== "Restroom" && "ml-4"}`}>
                            {renderBlobImage("Restroom")}
                            <p className={`lr -rotate-180  ${activeCategory === "Restroom" && "font-bold"}`} onClick={() => handleCategoryClick("Restroom")}>Restroom</p>
                        </div>
                        <div className={`flex items-center ${activeCategory !== "EV Parking" && "ml-4"}`}>
                            {renderBlobImage("EV Parking")}
                            <p className={`lr -rotate-180 ${activeCategory === "EV Parking" && "font-bold"}`} onClick={() => handleCategoryClick("EV Parking")}>EV Parking</p>
                        </div>
                        <div className={`flex items-center ${activeCategory !== "Parking" && "ml-4"}`}>
                            {renderBlobImage("Parking")}
                            <p className={`lr -rotate-180 ${activeCategory === "Parking" && "font-bold"}`} onClick={() => handleCategoryClick("Parking")}>Parking</p>
                        </div>
                    </div>
                </div>
                {/* Card */}
                {/* <div className="w-4/5 h-[293px]">
                    <Slider {...settings}>
                        <div className="h-[293px] w-[310px] p-3 bg-white rounded-2xl relative">
                            <Image src={londonImg} className="rounded-lg h-[159px] object-cover" alt="london" />
                            <p className="text-lg font-semibold mt-2">Best Western Cedars</p>
                            <div className="flex mt-2 gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#5527D7]">
                                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                                </svg>
                                <p className="text-[15px] text-[#666666] font-medium">1 Anzinger Court</p>
                            </div>
                            <div className="flex mt-3 justify-between items-center">
                                <p><span className="text-xl font-bold">$250</span>/hour</p>
                                <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#87DDA6]">Stock</button>
                            </div>
                        </div>
                        <div className="h-[292px] shadow-lg w-[273px] p-3 bg-white rounded-2xl relative">
                            <Image src={londonImg} className="rounded-lg h-[159px] object-cover" alt="london" />
                            <p className="text-lg font-semibold mt-2">Best Western Cedars</p>
                            <div className="flex mt-2 gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#5527D7]">
                                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                                </svg>
                                <p className="text-[15px] text-[#666666] font-medium">1 Anzinger Court</p>
                            </div>
                            <div className="flex mt-3 justify-between items-center">
                                <p><span className="text-xl font-bold">$250</span>/hour</p>
                                <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#87DDA6]">Stock</button>
                            </div>
                        </div>
                        <div className="h-[292px] shadow-lg w-[273px] p-3 bg-white rounded-2xl relative">
                            <Image src={londonImg} className="rounded-lg h-[159px] object-cover" alt="london" />
                            <p className="text-lg font-semibold mt-2">Best Western Cedars</p>
                            <div className="flex mt-2 gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#5527D7]">
                                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                                </svg>
                                <p className="text-[15px] text-[#666666] font-medium">1 Anzinger Court</p>
                            </div>
                            <div className="flex mt-3 justify-between items-center">
                                <p><span className="text-xl font-bold">$250</span>/hour</p>
                                <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#87DDA6]">Stock</button>
                            </div>
                        </div>
                        <div className="h-[292px] shadow-lg w-[273px] p-3 bg-white rounded-2xl relative">
                            <Image src={londonImg} className="rounded-lg h-[159px] object-cover" alt="london" />
                            <p className="text-lg font-semibold mt-2">Best Western Cedars</p>
                            <div className="flex mt-2 gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#5527D7]">
                                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                                </svg>
                                <p className="text-[15px] text-[#666666] font-medium">1 Anzinger Court</p>
                            </div>
                            <div className="flex mt-3 justify-between items-center">
                                <p><span className="text-xl font-bold">$250</span>/hour</p>
                                <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#87DDA6]">Stock</button>
                            </div>
                        </div>
                    </Slider>
                </div> */}
                <div className="w-4/5 h-[293px]">
                    <Slider {...settings}>
                        {cardData[activeCategory as keyof typeof cardData]?.map((card) => (
                            <div key={card.id} className="h-[293px] w-[310px] p-3 bg-white rounded-2xl relative">
                                <Image src={card.img} className="rounded-lg h-[159px] object-cover" alt="london" />
                                <p className="text-lg font-semibold mt-2">{card.title}</p>
                                <div className="flex mt-2 gap-1 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#5527D7]">
                                        <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-[15px] text-[#666666] font-medium">{card.address}</p>
                                </div>
                                <div className="flex mt-3 justify-between items-center">
                                    <p><span className="text-xl font-bold">{card.price}</span>/hour</p>
                                    <button className="rounded-full font-semibold text-sm px-4 py-1 text-[#15813C] bg-[#87DDA6]">{card.buttonText}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TImeBasedMobile;
