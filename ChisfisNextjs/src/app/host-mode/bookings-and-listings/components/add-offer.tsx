'use client'


// import CalenderComponent from "../../booking/CalenderComponent"
import {  BookingAndListingVerticalCard } from "./booking-and-listing-card"
import { DatePickerCustomHeaderOneMonth } from "@/components/DatePickerCustomHeaderOneMonth"
import DatePickerCustomDay from "@/components/DatePickerCustomDay"
import { Fragment, useState } from "react"
import DatePicker from "react-datepicker";
import Checkbox from "@/shared/Checkbox"


export function AddOffer(){
    const [selectedRange, setSelectedRange] = useState<Date[]>([new Date(), new Date()]);
    const handleChange = (date: Date | [Date, Date] | null | any) => {
        if (Array.isArray(date)) {
            setSelectedRange(date);
        }
    };

    // const discounts = [
    //     {
    //         title: '5%',
    //         onClick: () => console.log('Discount 1')
    //     },
    //     {
    //         title: '10%',
    //         onClick: () => console.log('Discount 2'),
    //     },
    //     {
    //         title: '15%',
    //         onClick: () => console.log('Discount 3'),
    //     },

    // ]

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
                <BookingAndListingVerticalCard menus={[
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
                    ]} setSelectedItem={()=>{}}   />
            </div>
            <div className="col-span-1 relative ml-0 md:ml-12">
                <div className="flex justify-center items-center relative">
                    <DatePicker
                            onChange={handleChange}
                            startDate={selectedRange[0]}
                            endDate={selectedRange[1]}
                            selectsRange
                            monthsShown={1}
                            showPopperArrow={false}
                            showPreviousMonths={false}
                            inline
                            renderCustomHeader={(p:any) => (
                            <DatePickerCustomHeaderOneMonth {...p} />
                            )}
                            renderDayContents={(day:any, date:any) => (
                                <DatePickerCustomDay dayOfMonth={day} date={date} />
                            )}
                        />
                </div>

                    <div className="mt-4 w-full md:w-60">
                        <h2 className="text-xl font-semibold py-4">Add Discount</h2>
                        <div className="grid grid-cols-1 space-y-4 ">
                            {
                                Array.from([5,10,20,50,"Custom"]).map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <div  className="flex items-center justify-between">
                                                <span className="font-semibold">{item == "Custom" ? "Custom" : `${item}%`}</span>
                                            <Checkbox name={`item-${item}`} />
                                            </div>
                                            <hr className="border-gray-200" />
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
            </div>
        </div>
    )
}