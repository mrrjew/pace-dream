'use client';
// import Sidebar from "../SideBar";
// import { Route } from "@/routers/types";
import { RentableItem } from "@/types/rentalItems";
import { useSession } from "@/hooks/useSession";
import { useMutateData, useSubmitMutateData } from "@/hooks/useMutate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


// const sampleData:Partial<RentableItem> = {
//   "title": "Sample Property",
//   "summary": "Kai Heng Century Hotel offers ultimate comfort and luxury",
//   "details": {
//       "amenities": [
//           "wifi",
//           "furnished",
//           "tv",
//           "parking",
//           "ac",
//           "room-service"
//       ],
//       "rules": [],
//       "room_type": "logn term",
//       "property_type": "",
//       "hourly_rental_time": {
//           "startTime": "",
//           "endTime": ""
//       },
//       "description": "Kai Heng Century Hotel offers ultimate comfort and luxury. This 4-storied hotel is a beautiful combination of traditional grandeur and modern facilities. The 255 exclusive guest rooms are furnished with a range of modern amenities such as television and internet access. International direct-dial phone and safe are also available in any of these rooms. Wake-up call facility is also available in these rooms. ",
//       "bedroom_count": 3,
//       "bathroom_count": 2,
//       "rule_description": "No smoking\nKeep rooms clean"
//   },
//   "location": {
//       "address": "321 24th St, Virginia Beach, VA 23451, USA",
//       "longitude": -75.97921939999999,
//       "latitude": 36.8516437,
//       "zipcode": "23451",
//       "city": "Virginia",
//       "state": "Virginia",
//       "country": "USA",
//       "street_address": "321 24th St",
//       "googlemap_link": "https://www.google.com/maps/?pb=!1m14!1m12!1m3!1d15883.860440917622!2d-75.97921939999999!3d36.8516437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1en!2sgh!4v1717982745573!5m2!1en!2sgh"
//   },
//   "gallery": {
//       "thumbnail": "https://totel-images.s3.us-east-2.amazonaws.com/ac6f1722-92ae-4bba-b50f-fcfceba5a489-pacedream-1716795993904_download.jpeg",
//       "images": [
//           "https://totel-images.s3.us-east-2.amazonaws.com/ac6f1722-92ae-4bba-b50f-fcfceba5a489-pacedream-1716795993904_download.jpeg",
//           "https://totel-images.s3.us-east-2.amazonaws.com/636c8129-b9f7-4208-9b34-059b8644d988-pacedream-marc_mintel_nSy6EkPBwe8_unsplash.jpg",
//           "https://totel-images.s3.us-east-2.amazonaws.com/9edd85d7-c74a-415d-ab56-53bba48a4b2e-pacedream-marc_mintel_nSy6EkPBwe8_unsplash.jpg",
//           "https://totel-images.s3.us-east-2.amazonaws.com/c0ae8367-2364-4d70-936e-65c542bc9e9f-pacedream-taylor_heery_8DlbPCxfGHA_unsplash.jpg"
//       ],
//       "videos": []
//   },
//   "attachments": [
//       {
//           "link": "https://totel-images.s3.us-east-2.amazonaws.com/65e01325-b1ea-4750-a17c-e4e188315ab1-pacedream-Example_API_Implementations_.pdf",
//           "description": "",
//           "mime_type": "application/pdf"
//       }
//   ],
//   "item_type": "room",
//   "price": [
//       {
//           "frequency": "monthly",
//           "grace_period": 0,
//           "pricing_type": "base",
//           "currency": "USD",
//           "recurring_days": 0,
//           "discounts": [],
//           "amount": 600
//       },
//       {
//           "frequency": "weekly",
//           "grace_period": 0,
//           "pricing_type": "base",
//           "currency": "USD",
//           "recurring_days": 0,
//           "discounts": [],
//           "amount": 200
//       },
//       {
//           "frequency": "custom",
//           "grace_period": 0,
//           "pricing_type": "base",
//           "currency": "USD",
//           "recurring_days": 0,
//           "discounts": [],
//           "amount": 5
//       },
//       {
//           "frequency": "daily",
//           "grace_period": 0,
//           "pricing_type": "base",
//           "currency": "USD",
//           "recurring_days": 0,
//           "discounts": [],
//           "amount": 50
//       }
//   ],
//   "rules": {},
//   "rating": 0,
//   "owner": "6664ddbef4bda44fab89cb64"
// };




export default function AddListingMainLayoutWrapper(
    {children,
    hideBackBtn,
    onNext,
    onBack,
    isFirstStep,
    isLastStep,
    currentStep,
    submitBtnText,
    totalSteps,
    data
    }:{
      children:React.ReactNode,
      hideBackBtn?:boolean,
      onNext:()=>void,
      onBack:()=>void,
      isFirstStep:boolean,
      isLastStep:boolean,
      currentStep:number
      submitBtnText:string,
      data?:Partial<RentableItem>,
      totalSteps?:number
    }) {
      const route = useRouter();
      const {getSession} = useSession();
      const {userId} = getSession();
      const mutate = useSubmitMutateData<typeof data>({endpoint:'/property/add',queryKey:[]});
      const [steps, setSteps] = useState<Array<number>>([]);

      useEffect(() => {
        if(totalSteps){
          const steps:Array<number> = [];
          for (let i = 0; i < totalSteps; i++) {
            if(!steps.includes(i)){
              steps.push(i);
            };
          }
          setSteps(steps);
        }
      }, [totalSteps])

      // hadnle next or submit button click
      async function handleNext(){
        if(submitBtnText?.toLowerCase()?.trim() == 'publish'){
          // const _data = {...data,owner:userId,}
           // handle submit
          // console.log("submit : ",_data);
           mutate.mutateAsync({
             data:{...data,owner:userId,status:'published'}
           }).then((res)=>{
            // console.log("response : ",res);
            if(res?.status === true){
              onNext();
            }
          }).catch((error)=>{
            console.log("error : ",error);
          } );
          return;
        }

        if(isLastStep){
          route.replace('/add-listing')
        }
        if(submitBtnText?.toLowerCase()?.trim() == 'next'){
          onNext();
          return;
        }
      }

      // useEffect(() => {
      //   console.log("data : ",data?.gallery?.images);
      // }, [data])

  return (
    <div className="">
            {children}

      <div className="w-full rounded-lg fixed mt-4 p-2 right-0 left-0 md:right-24 md:left-auto bottom-0 md:bottom-2">
            <div className="flex flex-wrap justify-between md:justify-end  bg-white md:bg-inherit gap-4 items-center p-2 md:p-1 ">
                <div className="flex items-center justify-between gap-2 md:hidden w-full">
                    { 
                      steps?.map((_,index)=>{
                        return (
                          <div key={index} className={`w-8 h-1 ${currentStep >= index ? 'bg-primary-700':'bg-neutral-300'}`}></div>
                        )
                      })
                    }
                </div>
                <button onClick={onBack} disabled={isFirstStep} className={`${hideBackBtn ? 'block md:hidden':''} bg-primary-100 text-black py-2 md:py-3 px-8 min-w-fit md:min-w-40 rounded-md disabled:opacity-40 disabled:cursor-not-allowed`}>Back</button>
                <button onClick={handleNext} disabled={mutate.isLoading} className="bg-primary-700 text-white py-2 md:py-3 px-4 min-w-fit md:min-w-40 rounded-md">
                    {mutate.isLoading ? 'Please wait...': submitBtnText}
                </button>
          </div>
      </div>
</div>)
    }
    // <div className="flex h-ful">
      {/* <div className="w-60 h-full hidden md:block">
        <div className=" h-full fixed bg-white">
          <div className=" h-full top-0">
              <div className="flex items-center justify-center">
                <Logo  className="w-40 h-20 mt-6"/>
              </div>
              <Sidebar options={options} />
          </div>
        </div>
      </div> */}
        // <div className="flex-1 flex-col py-4 px-1 md:px-8 h-screen">
            
        //     <div className="w-full h-fit pb-24 md:pb-0">
        //         <main className="h-fit container py-0 mt-20">
        //           {children}
        //         </main>
        //     </div>

        //     <div className="w-full rounded-lg mt-4 p-4">
        //           <div className="flex flex-wrap justify-between md:justify-end bg-white md:bg-inherit w-full right-0 left-0 md:right-24 md:left-auto fixed bottom-0 md:bottom-2 gap-4 items-center p-2 md:p-1 ">
        //               {/* display steps - - - on mobile */}
        //               <div className="flex items-center justify-between gap-2 md:hidden w-full">
        //                   { 
        //                     steps?.map((_,index)=>{
        //                       return (
        //                         <div key={index} className={`w-8 h-1 ${currentStep >= index ? 'bg-primary-700':'bg-neutral-300'}`}></div>
        //                       )
        //                     })
        //                   }
        //               </div>
        //               <button onClick={onBack} disabled={isFirstStep} className={`${hideBackBtn ? 'block md:hidden':''} bg-primary-100 text-black py-2 md:py-3 px-8 min-w-40 rounded-md disabled:opacity-40 disabled:cursor-not-allowed`}>Back</button>
        //               <button onClick={handleNext} disabled={mutate.isLoading} className="bg-primary-700 text-white py-2 md:py-3 px-4  min-w-40 rounded-md">
        //                   {mutate.isLoading ? 'Please wait...': submitBtnText}
        //               </button>
        //         </div>
        //     </div>
        // </div>
    // </div>
//   );
// }