import image1 from "@/images/Rectangle 3033.png"
import image2 from "@/images/Rectangle 3034.png"
import image3 from "@/images/Rectangle 3035.png"
import image4 from "@/images/Rectangle 3036.png"
import image5 from "@/images/Rectangle 3037.png"
import image6 from "@/images/Rectangle 3038.png"
import Image from "next/image"
interface BrowseByDestinationProps {
    className?: string;
  }
  
  const BrowseByDestination: React.FC<BrowseByDestinationProps> = ({ className }) => {
    return (

        <div className={` ${className}`}>
            
      <div className="container md:px-24 md:pb-20 ">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Browse by Destination</h2>
          <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">Explore perfect places by destination</p>
        <div className="mt-8 flex justify-between items-center">
          <ChevronLeftIcon className="h-6 w-6 text-gray-400" />
          <div className="mt-3  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center">
              <Image
                alt="New York"
                className="w-32 h-32 sm:w-40 sm:h-40  object-cover"
                height="160"
                src={image1}
                style={{
                    width:"146px",
                    height:"243px",
                    borderRadius:"73px",
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">New York</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="London"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                height="160"
                src={image2}
                style={{
                    width:"146px",
                    height:"243px",
                    borderRadius:"73px",
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">London</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="Tokyo"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                height="160"
                src={image3}
                style={{
                    width:"146px",
                    height:"243px",
                    borderRadius:"73px",
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">Tokyo</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="Toronto"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                height="160"
                src={image4}
                style={{
                    width:"146px",
                    height:"243px",
                    borderRadius:"73px",
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">Toronto</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="San Francisco"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                height="160"
                src={image5}
                style={{
                    width:"146px",
                    height:"243px",
                    borderRadius:"73px",
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">San Francisco</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="Miami"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                height="160"
                src={image6}
                style={{
                    width:"146px",
                    height:"243px",
                    borderRadius:"73px",
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
              <p className="mt-3 text-sm font-medium text-gray-700">Miami</p>
            </div>
          </div>
          <ChevronRightIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      </div>
    )
  }
  
  function ChevronLeftIcon(props:any) {
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
  
  
  function ChevronRightIcon(props:any) {
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