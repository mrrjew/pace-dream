"use client";

import Image from "next/image";
import GoogleMapReact from "google-map-react";
import { StarIcon } from "@heroicons/react/24/solid";
import AnyReactComponent from "@/components/AnyReactComponent/AnyReactComponent";
import __partners from "@/data/jsons/__partners.json";
import avatar from "@/images/avatars/Image-1.png";
import statusIcon from "@/images/status-icon.svg";
import shareIcon from "@/images/share-icon.svg";
import partnerImage1 from "@/images/partner/partner1.png";
import partnerImage2 from "@/images/partner/male.png";
import partnerImage3 from "@/images/partner/woman.png";
import partnerImage4 from "@/images/partner/everyone.png";
import shieldIcon from "@/images/shield-icon.svg";
import reportIcon from "@/images/report-icon.svg";
import gardenViewIcon from "@/images/garden-view-icon.svg";
import wifiIcon from "@/images/wifi-icon.svg";
import washerIcon from "@/images/washer-icon.svg";
import conditioningIcon from "@/images/conditioning-icon.svg";
import refrigeratorIcon from "@/images/refrigerator-icon.svg";
import KitchenIcon from "@/images/kitchen-icon.svg";
import petsIcon from "@/images/pets-icon.svg";
import dryerIcon from "@/images/dryer-icon.svg";
import cameraIcon from "@/images/camera-icon.svg";
import bicycleIcon from "@/images/bicycle-icon.svg";
import HotelNearByList from "@/components/Partner/HotelNearByList";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorageUtil";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState, Fragment } from "react";

const page = ({ params }: any) => {
  const { id } = params;
  const partnerId = id.toString();

  const partnerData = __partners.find((item: any) => item.id === +partnerId);

  const {
    name = "",
    location = "",
    description = "",
    partnerImage = [],
    minimumPrice = 0,
    maximumPrice = 0,
    amenities = [],
    map = {},
    looking_for_partner_location = [],
  } = partnerData || {};

  const pathname = usePathname();
  setLocalStorageItem("currentPath", pathname);

  const [showGreeting, setShowGreeting] = useState(
    getLocalStorageItem("showGreeting")
  );

  useEffect(() => {
    setShowGreeting(getLocalStorageItem("showGreeting"));
  }, []);

  const handleClick = () => {
    removeLocalStorageItem("showGreeting");
    setShowGreeting(null);
  };

  const defaultProps = {
    center: {
      lat: 51.509865,
      lng: -0.118092,
    },
    zoom: 12,
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="partner-details-page">
      <div className="btn-back">
        <div className="lg:container">
          <Link href={"/partner"}>
            <button type="button">Back</button>
          </Link>
        </div>
      </div>

      {showGreeting && (
        <>
          <div className="flex w-4/5 p-4 mx-auto border rounded-xl border-[#008d00] bg-[#e9f8e9] mt-6">
            <div className="w-8 mr-1">
              {" "}
              <FcApproval className="h-8 w-8" />{" "}
            </div>
            <div>
              <h2 className="font-medium">
                Successfully sent a proposal to Ghazal!!
              </h2>
              <p className="text-sm text-[#5f6d7e] mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lobortis enim consectetur eu suspendisse. Malesuada ac libero
                odio nulla ut turpis ut scelerisque sed. Imperdiet commodo
                integer pellentesdsadasdasdasque quis id.
              </p>

              <Link href={"/partner"}>
                <div className="flex">
                  <button className="font-medium mt-3 cursor-pointer">
                    Manage Listing
                  </button>
                  <AiOutlineArrowRight className="mt-4 ml-2 font-bold" />
                </div>
              </Link>
            </div>
            <div onClick={handleClick} className="w-4 cursor-pointer">
              {" "}
              <RxCross2 />{" "}
            </div>
          </div>
        </>
      )}

      <div className="main-wrapper">
        <div className="partner-content">
          <div className="partner-content__info">
            <Image src={avatar} width={56} height={56} alt="avatar" />
            <div>
              <p className="status">
                <Image src={statusIcon} width={16} height={16} alt="verified" />
                <span>Identity verified</span>
              </p>
              <h2 className="name">{name}</h2>
            </div>
          </div>

          <div className="partner-content__btn-wrapper">
            <button
              type="button"
              className="partner-content__btn-wrapper--follow"
            >
              Follow
            </button>
            <button
              type="button"
              className="partner-content__btn-wrapper--share"
            >
              <Image src={shareIcon} width={22} height={22} alt="share" />{" "}
            </button>
          </div>
        </div>

        <div className="image-wrapper">
          <Image src={partnerImage[0]} width={632} height={536} alt="image" />
          <Image src={partnerImage[1]} width={308} height={260} alt="image" />
          <Image src={partnerImage[2]} width={308} height={260} alt="image" />
          <Image src={partnerImage[3]} width={632} height={260} alt="image" />
        </div>

        <div className="container">
          <div className="details-content">
            <div className="details-content__description">
              <div className="flex items-start gap-2 lg:gap-4">
                <Image
                  src={shieldIcon}
                  width={24}
                  height={24}
                  className="w-6 lg:w-4"
                  alt="shield"
                />
                <p className="w-full lg:w-[70%] text-[13px] text-black leading-[18px]">
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>

              <div className="description">
                <h3 className="title">Description</h3>
                <p className="date">
                  Available From : <span>24, April 2023</span>
                </p>
                <p className="content">{description}</p>
                <button type="button" className="btn-show-more">
                  Show more
                </button>
              </div>

              <div className="amenities">
                <h3 className="title">Amenities Looking for</h3>

                <div className="amenities-list">
                  {amenities.slice(0, 10).map((item: any) => (
                    <div className="amenities-list__item">
                      <Image
                        src={gardenViewIcon}
                        width={32}
                        height={32}
                        alt="icon"
                        className="item-image"
                      />
                      <p className="item-name">{item}</p>
                    </div>
                  ))}
                  {/* <div className="amenities-list__item">
                    <Image
                      src={gardenViewIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Garden View</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={wifiIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Free Wifi</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={washerIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Free Washer</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={conditioningIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Air Conditioning</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={refrigeratorIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Refrigerator</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={KitchenIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Kitchen</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={petsIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Pets Allowed</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={dryerIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Dryer</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={cameraIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Security cameras on property</p>
                  </div>
                  <div className="amenities-list__item">
                    <Image
                      src={bicycleIcon}
                      width={32}
                      height={32}
                      alt="icon"
                      className="item-image"
                    />
                    <p className="item-name">Bicycle</p>
                  </div> */}
                </div>

                <button
                  onClick={openModal}
                  type="button"
                  className="btn-show-more"
                >
                  Show all {amenities.length} amenities
                </button>

              </div>
            </div>

            <div className="details-content__action">
              <div className="submit-action">
                <p className="cost">
                  <span>
                    ${minimumPrice}-${maximumPrice}
                  </span>{" "}
                  / night
                </p>
                <div className="btn-wrapper">
                  <button type="button" className="btn-message">
                    Send Message
                  </button>
                  <Link href={"/checkout"}>
                    <button type="button" className="btn-proposal">
                      Send Proposal
                    </button>
                  </Link>
                </div>
                <p className="message">You won’t be charged yet</p>
              </div>

              <a href="" className="report">
                <Image src={reportIcon} width={16} height={16} alt="report" />
                Report this listing
              </a>
            </div>
          </div>

          <div className="location">
            <h3 className="title">Where he's looking for the partner?</h3>

            <div className="btn-wrapper">
              {looking_for_partner_location.map((item: any) => (
                <button type="button" className="btn-location">
                  {item}
                </button>
              ))}
            </div>

            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
              >
                <AnyReactComponent
                  lat={defaultProps.center.lat}
                  lng={defaultProps.center.lng}
                />
              </GoogleMapReact>
            </div>
          </div>

          <div className="review-wrapper">
            <div className="review-wrapper__header">
              <StarIcon className="w-6 h-6 text-[#FFAE43]" />
              <h3 className="title">
                <span className="rating">5.0</span>
                <span className="dot"></span>
                <span className="review">12 Reviews</span>
              </h3>
            </div>

            <div className="review-wrapper__list">
              <div className="review-item">
                <div className="review-item__star">
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#DAE0E6]" />
                </div>
                <p className="review-item__content">
                  “Absolutely incredible. This place was definitely a dream!
                  From the entryway, to each floor... stunning”
                </p>
                <div className="review-item__user">
                  <Image src={avatar} width={40} height={40} alt="avatar" />
                  <div className="user-info">
                    <p className="user-info__name">Dave Jones</p>
                    <p className="user-info__status">Student</p>
                  </div>
                </div>
              </div>

              <div className="review-item">
                <div className="review-item__star">
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#DAE0E6]" />
                </div>
                <p className="review-item__content">
                  “Absolutely incredible. This place was definitely a dream!
                  From the entryway, to each floor... stunning”
                </p>
                <div className="review-item__user">
                  <Image src={avatar} width={40} height={40} alt="avatar" />
                  <div className="user-info">
                    <p className="user-info__name">Dave Jones</p>
                    <p className="user-info__status">Student</p>
                  </div>
                </div>
              </div>

              <div className="review-item">
                <div className="review-item__star">
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#FFAE43]" />
                  <StarIcon className="w-6 h-6 text-[#DAE0E6]" />
                </div>
                <p className="review-item__content">
                  “Absolutely incredible. This place was definitely a dream!
                  From the entryway, to each floor... stunning”
                </p>
                <div className="review-item__user">
                  <Image src={avatar} width={40} height={40} alt="avatar" />
                  <div className="user-info">
                    <p className="user-info__name">Dave Jones</p>
                    <p className="user-info__status">Student</p>
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="btn-show-more">
              Show more reviews
            </button>
          </div>
        </div>

        <div className="hotel-nearby">
          <div className="container">
            <div className="header">
              <div>
                <h2 className="hotel-nearby__title">Nearby hotels</h2>
                <p className="hotel-nearby__subtitle">
                  You can find places and stay with hotels and home-stays ranked
                  by travellers. What fun could we have more than having
                  roommate with similar interest.
                </p>
              </div>
              <button type="button" className="btn-show-more">
                Show more
              </button>
            </div>
            <HotelNearByList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
