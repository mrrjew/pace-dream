import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import { Popover } from "@headlessui/react";
import { Search } from "@mui/icons-material";
import DatePicker from "react-datepicker";
import { ReactNode, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { FaUsers } from "react-icons/fa";

const FilterBar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [tomorrowDate, setTomorrowDate] = useState(() => {
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    return tomorrow;
  });

  const handleChange = (
    date: [Date | null, Date | null],
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    setSelectedRange(date);
    console.log(selectedRange);
    const [startDate, endDate] = date;
  };

  function getTodayDate() {
    const today = new Date();
    today.setDate(today.getDate()); // Format today's date
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    const formattedDate = today.toLocaleDateString("en-US", options);
    // Extract the first three characters of the day
    const day = formattedDate.split(",")[0];
    return `${day.slice(0, 3)},${formattedDate.split(",")[1]}`;
  }

  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Get tomorrow's date
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    const formattedDate = tomorrow.toLocaleDateString("en-US", options);
    // Extract the first three characters of the day
    const day = formattedDate.split(",")[0];
    return `${day.slice(0, 3)},${formattedDate.split(",")[1]}`;
  }

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

  // guests
  const [guests, setGuests] = useState<number>(0);

  return (
    <div className="w-max flex flex-col items-center">
      {/* wrapper */}
      <div className="w-screen flex items-center justify-center relative -top-12 -mb-[40px] lg:-ml-24 bg-slate-200 r-0 bg-wrapper bg-center bg-cover h-max py-8 md:py-20">
        <div className="w-full bg-slate-900/60 h-full absolute "></div>

        <div className="bg-white relative l-0 px-8 rounded-lg p-8 flex flex-col lg:flex-row gap-1 lg:gap-4 md:gap-2 w-max ">
          <div className="space-y-1 lg:space-y-2">
            <label htmlFor="location" className="text-gray-900 text-sm">
              Location
            </label>
            <div className="flex gap-2 items-center border-[1px] border-gray-200 p-1 px-4 rounded-lg">
              <Search className="text-gray-400 text-md" />
              <input
                type="text"
                placeholder="location"
                className="bg-transparent border-none outline-none focus:border-none"
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
                          {startDate && open && <p>{startDate.toString()}</p>}
                        </Popover.Button>

                        <Popover.Panel>
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
                className="text-gray-900 text-sm text-white"
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
                          {startDate && open && <p>{startDate.toString()}</p>}
                        </Popover.Button>

                        <Popover.Panel>
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
              <div className="flex items-center gap-2 ">
                <p>Add Guests</p>
                <button
                  onClick={() =>
                    setGuests((prev) => {
                      return prev < 1 ? 0 : prev - 1;
                    })
                  }
                >
                  -
                </button>
                <p>{guests}</p>
                <button onClick={() => setGuests((prev) => prev + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="space-y-1 lg:space-y-2">
            <label
              htmlFor="location"
              className="text-gray-900 text-sm text-white"
            >
              Button
            </label>
            <div>
              <button className="bg-violet rounded-lg px-8 py-[12px] text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
