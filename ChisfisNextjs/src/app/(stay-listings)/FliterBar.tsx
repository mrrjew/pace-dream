import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import { Popover } from "@headlessui/react";
import { Search } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { PlacesAutocompleteInput } from "@/components/GoogleMap";

type FilterBarProps = {
  guests: number;
  city: string | null;
  startDate: Date | null;
  endDate: Date | null;
};

const FilterBar = ({params,onParamChanges,onSearch,isLoading}:{params:FilterBarProps,onParamChanges?: (params: FilterBarProps) => void,
  onSearch?: (query:FilterBarProps) => void, isLoading?: boolean
}) => {
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >([params?.startDate || null, params?.endDate || null]);

  const handleChange = (
    date: [Date | null, Date | null],
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    setSelectedRange(date);
  };

   // guests
   const [guests, setGuests] = useState<number>(params?.guests || 1);

   // search
   const [city, setCity] = useState<string>(params?.city || "");
 
   const date1 = new Date(selectedRange[0] ?? "");
   const date2 = new Date(selectedRange[1] ?? "");
 
   const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
   const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30);
 
   // updated onParamChanges
   useEffect(() => {
     if (onParamChanges) {
       const [startDate, endDate] = selectedRange;
       onParamChanges({ city, guests, startDate, endDate });
     }
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [city, guests,selectedRange]);

  const renderStartDateOutput = (): any => {
    return (
      <div
        className={`flex justify-between items-center p-0  bg-transparent border-none text-sm placeholder:text-black text-black w-[8.2rem] h-[2rem]  line-clamp-1`}
      >
        <SlCalender className="text-gray-400 text-md" />
        {selectedRange[0]
          ? selectedRange[0]?.toLocaleDateString("en-US")
          : `Check In Date`}
      </div>
    );
  };

  const renderEndDateOutput = () => {
    return (
      <div
        className={`flex justify-between items-center p-0  bg-transparent border-none text-sm placeholder:text-black text-black w-[8.2rem] h-[2rem]  line-clamp-1`}
      >
        <SlCalender className="text-gray-400 text-md" />
        {selectedRange[1]
          ? selectedRange[1]?.toLocaleDateString("en-US")
          : `Check Out Date`}
      </div>
    );
  };

 

  return (
    <div className="bg-white flex justify-between p-2 gap-6 md:p-5 rounded-xl container">
        <div className="space-y-1 lg:space-y-2 flex-1">
          <label htmlFor="location" className="text-gray-900 text-sm">
            Location
          </label>
          <div className="flex gap-1 h-fit items-center border-[1px] border-gray-200 p-1 rounded-lg">
            <Search className="text-gray-400 text-md" />
            <PlacesAutocompleteInput 
              className="bg-transparent border-none focus:ring-0 w-full h-8"
              val={city || ""} 
              onSelect={(city,_)=>{
                setCity(city);
              }}
              onClear={()=>setCity("")}
            />
          </div>
        </div>
        <div className="flex">
          <div className="space-y-1 lg:space-y-2">
              <label htmlFor="location" className="text-gray-900 text-sm">
                Availability
              </label>
              <div className="flex justify-between gap-2">
                <div className="flex gap-2 items-center border-[1px] border-r-0 rounded-r-none border-gray-200 p-1 px-4 py-2 rounded-lg">
                  <Popover className="StayDatesRangeInput z-50 bg-transparent relative flex flex-col gap-4">
                    {({ open }) => (
                      <>
                        <Popover.Button>
                          {renderStartDateOutput()}
                          {/* {startDate && open && <p>{startDate.toString()}</p>} */}
                        </Popover.Button>

                        <Popover.Panel className="p-2 absolute z-50 w-screen max-w-sm mt-3 transform bg-white rounded-3xl left-full top-full -translate-x-96 md:-translate-x-1/2 lg:max-w-3xl">
                          <DatePicker
                            onChange={handleChange}
                            startDate={selectedRange[0]}
                            endDate={selectedRange[1]}
                            selectsRange
                            monthsShown={2}
                            showPopperArrow={false}
                            inline
                            renderCustomHeader={(p) => (
                              <DatePickerCustomHeaderTwoMonth {...p} />
                            )}
                            renderDayContents={(day, date) => (
                              <DatePickerCustomDay
                                dayOfMonth={day}
                                date={date}
                              />
                            )}
                          />
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
          </div>

          <div className="space-y-1 lg:space-y-2">
              <label
                htmlFor="location"
                className="text-sm text-transparent"
              >
                Availability{" "}
              </label>

              <div className="flex justify-between gap-2">
                <div className="flex gap-2 items-center border-[1px] border-gray-200 p-1 px-4 py-2 rounded-r-lg">
                  <Popover className="StayDatesRangeInput z-50 bg-transparent relative flex flex-col gap-4">
                    {({ open }) => (
                      <>
                        <Popover.Button>
                          {renderEndDateOutput()}
                          {/* {startDate && open && <p>{startDate.toString()}</p>} */}
                        </Popover.Button>

                        <Popover.Panel className="p-2 absolute z-50 w-screen max-w-sm mt-3 transform bg-white rounded-3xl left-full top-full -translate-x-96 md:-translate-x-1/2 lg:max-w-3xl">
                          <DatePicker
                            onChange={handleChange}
                            startDate={selectedRange[0]}
                            endDate={selectedRange[1]}
                            selectsRange
                            monthsShown={2}
                            showPopperArrow={false}
                            inline
                            renderCustomHeader={(p) => (
                              <DatePickerCustomHeaderTwoMonth {...p} />
                            )}
                            renderDayContents={(day, date) => (
                              <DatePickerCustomDay
                                dayOfMonth={day}
                                date={date}
                              />
                            )}
                          />
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
          </div>

        </div>

        <div className="space-y-1 lg:space-y-2">
              <label htmlFor="location" className="text-gray-900 text-sm">
                Guests
              </label>
              <div className="flex gap-2 items-center border-[1px] border-gray-200 py-[12px] px-4 rounded-lg">
                <FaUsers className="text-gray-400 text-md" />
                <div className="flex w-fit items-center gap-2 ">
                  {/* <p>Guests</p> */}
                  <button
                  className="select-none"
                    onClick={() =>
                      setGuests((prev) => {
                        return prev < 1 ? 1 : (prev - 1)||1;
                      })
                    }
                  >
                    -
                  </button>
                  <p className="w-8 text-center select-none">{guests}</p>
                  <button className="select-none" onClick={() => setGuests((prev) => prev + 1)}>+</button>
                </div>
              </div>
        </div>

        <div className="space-y-1 lg:space-y-2">
            <label
              htmlFor="location"
              className=" text-sm text-transparent"
            >
              Button
            </label>
            <div>
              <button
                disabled={isLoading}
                className="bg-violet min-w-52 w-52 rounded-lg px-4 py-[12px] text-white"
                onClick={() => {
                  if (onSearch) {
                    const [startDate, endDate] = selectedRange;
                    onSearch({ city, guests, startDate, endDate,});
                  }
                }}
              >
               {isLoading ? "Please wait..." : "Search"}
              </button>
            </div>
        </div>
        
  </div>
  );
};

export default FilterBar;
