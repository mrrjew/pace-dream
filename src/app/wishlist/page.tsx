import Image from "next/image";
import img1 from "@/images/wishlist-img-1.png";
import img2 from "@/images/wishlist-img-2.png";
import Link from "next/link";

const wishListContent = [
  {
    id: 1,
    img: img1,
    name: "Countryside 2024",
    save: [
      {
        id: "id1",
        authorId: 10,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 17,
        title: "Best Western Cedars Hotel ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 70,
        viewCount: 602,
        like: false,
        address: "1 Anzinger Court",
        reviewStart: 4.8,
        reviewCount: 28,
        price: "$26",
        maxGuests: 6,
        bedrooms: 10,
        bathrooms: 3,
        saleOff: "-10% today",
        isAds: null,
        map: { lat: 55.2094559, lng: 61.5594641 },
      },
      {
        id: "id_2",
        authorId: 1,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 9,
        title: "Bell by Greene King Inns ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/6434634/pexels-photo-6434634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/4577673/pexels-photo-4577673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/6474535/pexels-photo-6474535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 16,
        viewCount: 196,
        like: false,
        address: "32923 Judy Hill",
        reviewStart: 4.4,
        reviewCount: 198,
        price: "$250",
        maxGuests: 10,
        bedrooms: 6,
        bathrooms: 7,
        saleOff: "-10% today",
        isAds: null,
        map: { lat: 55.1972153, lng: 61.4407266 },
      },
      {
        id: "id_3",
        authorId: 6,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 11,
        title: "Half Moon, Sherborne by Marston's Inns ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2404422/pexels-photo-2404422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/756078/pexels-photo-756078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "6731 Killdeer Park",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "$278",
        maxGuests: 9,
        bedrooms: 9,
        bathrooms: 8,
        saleOff: null,
        isAds: null,
        map: { lat: 55.247483, lng: 61.5229791 },
      },
      {
        id: "id_4",
        authorId: 8,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 6,
        title: "White Horse Hotel by Greene King Inns ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/2290738/pexels-photo-2290738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2404422/pexels-photo-2404422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 6,
        viewCount: 91,
        like: false,
        address: "35 Sherman Park",
        reviewStart: 4.8,
        reviewCount: 34,
        price: "$40",
        maxGuests: 6,
        bedrooms: 7,
        bathrooms: 5,
        saleOff: null,
        isAds: null,
        map: { lat: 55.2342034, lng: 61.5409607 },
      },
      {
        id: "id_5",
        authorId: 2,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 11,
        title: "Ship and Castle Hotel ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2079452/pexels-photo-2079452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 91,
        viewCount: 574,
        like: false,
        address: "3 Crest Line Park",
        reviewStart: 3.4,
        reviewCount: 340,
        price: "$147",
        maxGuests: 8,
        bedrooms: 3,
        bathrooms: 2,
        saleOff: null,
        isAds: null,
        map: { lat: 55.2288039, lng: 61.6050232 },
      },
    ],
  },
  {
    id: 2,
    img: img2,
    name: "Countryside 2025",
    save: [
      {
        id: "id1",
        authorId: 10,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 17,
        title: "Best Western Cedars Hotel ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 70,
        viewCount: 602,
        like: false,
        address: "1 Anzinger Court",
        reviewStart: 4.8,
        reviewCount: 28,
        price: "$26",
        maxGuests: 6,
        bedrooms: 10,
        bathrooms: 3,
        saleOff: "-10% today",
        isAds: null,
        map: { lat: 55.2094559, lng: 61.5594641 },
      },
      {
        id: "id_2",
        authorId: 1,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 9,
        title: "Bell by Greene King Inns ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/6434634/pexels-photo-6434634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/3201735/pexels-photo-3201735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/4577673/pexels-photo-4577673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/6474535/pexels-photo-6474535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 16,
        viewCount: 196,
        like: false,
        address: "32923 Judy Hill",
        reviewStart: 4.4,
        reviewCount: 198,
        price: "$250",
        maxGuests: 10,
        bedrooms: 6,
        bathrooms: 7,
        saleOff: "-10% today",
        isAds: null,
        map: { lat: 55.1972153, lng: 61.4407266 },
      },
      {
        id: "id_3",
        authorId: 6,
        date: "May 20, 2021",
        href: "/listing-stay-detail",
        listingCategoryId: 11,
        title: "Half Moon, Sherborne by Marston's Inns ",
        featuredImage:
          "https://images.pexels.com/photos/5191371/pexels-photo-5191371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        galleryImgs: [
          "https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2404422/pexels-photo-2404422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/756078/pexels-photo-756078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        ],
        commentCount: 47,
        viewCount: 843,
        like: true,
        address: "6731 Killdeer Park",
        reviewStart: 3.6,
        reviewCount: 16,
        price: "$278",
        maxGuests: 9,
        bedrooms: 9,
        bathrooms: 8,
        saleOff: null,
        isAds: null,
        map: { lat: 55.247483, lng: 61.5229791 },
      },
    ],
  },
];

const wishlist = () => {
  return (
    <div className="lg:mx-36 lg:mt-12 lg:mb-8 mx-5 mt-6 mb-9">
      {/* Heading */}
      <div>
        <p className="lg:text-5xl lg:font-medium text-4xl font-semibold">
          Wishlist
        </p>
      </div>
      {/* Cards */}
      <div className="lg:flex lg:flex-wrap lg:flex-row lg:gap-7 gap-5 flex flex-col lg:mt-10 mt-7">
        {wishListContent.map((item) => (
          <Link href={`/wishlist/${item.id}`} key={item.id}>
            <div className="flex flex-col gap-3">
              <div className="lg:w-72 sm:w-80 h-56 relative">
                <Image
                  src={item.img}
                  alt="wishlist_img1"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <p className="text-3xl lg:font-medium font-medium">{item.name}</p>
              <p className="text-[#757575]">{item.save.length} Save</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default wishlist;
