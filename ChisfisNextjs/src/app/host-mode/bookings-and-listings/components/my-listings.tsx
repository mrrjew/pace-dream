"use client";

import { useSession } from "@/hooks/useSession"
import { BookingAndListingCard } from "./booking-and-listing-card"
import { BookingAndListingGridLayout } from "./grid-layout"
import { RentableItem } from "@/types/rentalItems"
import { useFetchData } from "@/hooks/useFetch"
// import { useEffect } from "react"

export function MyListings({setSelectedItem}: {setSelectedItem: (value: boolean) => void}){

    const {getSession,} = useSession()
    const {userInfo} = getSession()

    const {data,isLoading} = useFetchData<Array<RentableItem>>({
        queryKey:['my-rentable-items'],
        endpoint: `/property/get-all-by-user/${userInfo?.id}`
    });
    // useEffect(() => {
    //     console.log("User Info : ",userInfo,userId);
    // }, [userInfo])


    // display skeleton while loading
    if(isLoading){
        return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
           {
            [1,2,3,4,5].map((_, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 w-full rounded-2xl">
                <div className="rounded-xl h-40 w-44 object-cover col-span-1 animate-pulse bg-gray-200" />
                <div className="grid grid-cols-1 col-span-2 gap-4">
                    <div className="flex items-center justify-between ">
                        <div className="rounded-xl h-6 w-44 animate-pulse bg-gray-200" />
                    </div>
                    <div>
                        <div className="rounded-xl mb-1 h-4 w-20 animate-pulse bg-gray-200" />
                        <div className="rounded-xl h-4 w-32 animate-pulse bg-gray-200" />
                    </div>
                    <div className="flex justify-between h-fit">
                        <div className="rounded-xl h-4 w-20 animate-pulse bg-gray-200" />
                        <div className="rounded-xl h-4 w-20 animate-pulse bg-gray-200" />
                    </div>
                    <div className="flex justify-between gap-6">
                        <div className="rounded-xl h-8 w-20 animate-pulse bg-gray-200" />
                        <div className="rounded-xl h-8 w-20 animate-pulse bg-gray-200" />
                    </div>
                    
                </div>
            </div>
            ))
        }
        </div>
        )
    }

    return (
        <BookingAndListingGridLayout>
           {
                data?.map((item, index) => (
                     <BookingAndListingCard 
                        key={index} 
                        data={item}
                        setSelectedItem={setSelectedItem}
                        menus={[
                        {
                            title: 'Add discount',
                            onClick: () => console.log('Add discount')
                        },
                        {
                            title: 'Pause The Listing',
                            onClick: () => console.log('Pause The Listing'),
                        },
                        {
                            title: 'Delete',
                            onClick: () => console.log('Edit'),
                            className: 'text-red-500'
                        },
                    ]} />
                ))
           }
        </BookingAndListingGridLayout>
    )
}
