import image1 from "@/images/Rectangle 3033.png"
import image2 from "@/images/Rectangle 3034.png"
import image3 from "@/images/Rectangle 3035.png"
import image4 from "@/images/Rectangle 3036.png"
import image5 from "@/images/Rectangle 3037.png"
import image6 from "@/images/Rectangle 3038.png"
import image7 from "@/images/Rectangle 3039.png"
import image8 from "@/images/Rectangle 3040.png"
import Image from "next/image"
import Link from "next/link"
interface BrowseByDestinationProps {
  className?: string;
}

const images = [
  {
    src: image1,
    alt: "New York",

  },
  {
    src: image2,
    alt: "London",
  },
  {
    src: image3,
    alt: "Tokyo",
  },
  {
    src: image4,
    alt: "Toronto",
  },
  {
    src: image5,
    alt: "San Francisco",
  },
  {
    src: image6,
    alt: "Miami",
  },
  {
    src: image7,
    alt: "Honolulu",
  },
  {
    src: image8,
    alt: "Sydney",
  },

]

const BrowseByDestination: React.FC<BrowseByDestinationProps> = ({ className }) => {
  return (

    <div className={` ${className}`}>

      <div className="container md:px-24 md:pb-20 ">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Browse by Destination</h2>
        <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">Explore perfect places by destination</p>
        <div className="mt-8 flex justify-between items-center">
          <ChevronLeftIcon className="h-6 w-6 text-gray-400" />
          <div className="mt-3  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {
              images.map((image, index) => {
                return (
                  <Link href="/listing-stay" key={index}>
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        alt={image.alt}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                        height="160"
                        src={image.src}
                        style={{
                          width: "146px",
                          height: "243px",
                          borderRadius: "73px",
                          aspectRatio: "160/160",
                          objectFit: "cover",
                        }}
                        width="160"
                      />
                      <p className="mt-3 text-sm font-medium text-gray-700">{image.alt}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
export default BrowseByDestination;