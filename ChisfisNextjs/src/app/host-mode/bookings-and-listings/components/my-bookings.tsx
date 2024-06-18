'use client'

import { useFetchData } from "@/hooks/useFetch";
import { BookingAndListingCard } from "./booking-and-listing-card"
import { BookingAndListingGridLayout } from "./grid-layout"
import { useSession } from "@/hooks/useSession";
import { RentableItem } from "@/types/rentalItems";

export function MyBookings({setSelectedItem}: {setSelectedItem: (value: boolean) => void}){

    const {getSession,} = useSession()
    const {userInfo} = getSession()
    const {data,isLoading,isError} = useFetchData<Array<RentableItem>>({
        queryKey:['my-rentable-items'],
        endpoint: `/property/get-all-by-user/5`
    });


    // display  no data found
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error...</div>
    if(data?.length === 0) return <div>No data found...</div>


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
                            title: 'Listing Again',
                            onClick: () => console.log('Listing Again'),
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