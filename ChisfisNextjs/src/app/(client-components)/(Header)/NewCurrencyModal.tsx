import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const suggestedFor = [
  {
    currencytitle: "United States Dollar",
    name: "USD",
    active: true,
  },
  {
    currencytitle: "Euro",
    name: "EUR",
    active: true,
  },
  {
    currencytitle: "United Arab Emirates Dirham",
    name: "AED",
    active: true,
  },
  {
    currencytitle: "Pound Sterling",
    name: "GBP",
    active: true,
  },
  {
    currencytitle: "Chinese Yuan",
    name: "CNY",
    active: true,
  },
  {
    currencytitle: "Australian Dollar",
    name: "AUD",
    active: true,
  },
];

export const allCurrencies = [
  {
    curencytitle: "United States Dollar",
    name: "USD",
    active: true,
  },
  {
    curencytitle: "Argentina Peso",
    name: "ARS",
    active: true,
  },
  {
    curencytitle: "Australian Dollar",
    name: "AUD",
    active: true,
  },
  {
    curencytitle: "Azerbaijani Manat",
    name: "AZN",
    active: true,
  },
  {
    curencytitle: "Bahraini Dinar",
    name: "BHD",
    active: true,
  },
  {
    curencytitle: "Brazilian Real",
    name: "BRL",
    active: true,
  },
  {
    curencytitle: "Bulgarain Lev",
    name: "BGN",
    active: true,
  },
  {
    curencytitle: "Canadian Dollar",
    name: "CAD",
    active: true,
  },
  {
    curencytitle: "Chilean Peso",
    name: "CLP",
    active: true,
  },
  {
    curencytitle: "Chinese Yuan",
    name: "CNY",
    active: true,
  },
  {
    curencytitle: "Colombian Peso",
    name: "COP",
    active: true,
  },
  {
    curencytitle: "Czech Koruna",
    name: "CZK",
    active: true,
  },
];

export default function CurrencyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [suggestedCurrencies, setSuggestedCurrencies] = useState({ index: "" });
  const [allCurrenciesList, setAllCurrenciesList] = useState({ index: "" });

  function toggleActiveSuggestedCurrency(index: any) {
    setSuggestedCurrencies({ index: String(index) });
    localStorage.setItem("currency", suggestedFor[index].name);
  }

  function toggleActiveAllCurrency(index: any) {
    setAllCurrenciesList({ index: String(index) });
    localStorage.setItem("currency", allCurrencies[index].name);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
                  <div className="overflow-y-hidden rounded-2xl bg-white">
                    <div className="flex justify-between items-center">
                      <div>
                        {" "}
                        <h1 className="pl-[24px] pt-[30px] pr-[24px] font-bold mb-[16px] text-xl ">
                          Select your currency
                        </h1>
                      </div>
                      <div className="top-[-17px] relative hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-[50%]">
                        <button className="p-3" onClick={onClose}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                          >
                            <path d="M13.31 12l6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="relative bg-white dark:bg-neutral-800 pr-[24px] pl-[24px] pt-0 pb-0 ">
                      <p className="mb-[16px] text-sm text-gray-500">
                        Where applicable prices will be converted to, and shown
                        in, the currency that you select. The currency you pay
                        in may differ based on your reservation, and a service
                        fee may also apply.
                      </p>
                      <h3 className=" flex text-sm font-bold mb-[8px]">
                        Suggested for you
                      </h3>
                      <div className="grid lg:grid-cols-4 gap-4 cursor-pointer">
                        {suggestedFor.map((item, index) => (
                          <a
                            key={index}
                            onClick={() => toggleActiveSuggestedCurrency(index)}
                            className={` p-[12px]  flex transition duration-150 ease-in-out text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                              suggestedCurrencies.index === "" + index
                                ? "bg-sky-50 dark:bg-blue-500 focus:bg-sky-50 dark:focus:bg-blue-500 text-blue-400"
                                : "opacity-80"
                            }`}
                            tabIndex={0}
                          >
                            <div className="my-[4px] w-full mr-[8px] flex justify-between items-center ">
                              <div className="flex flex-col items-start">
                                <p className=" text-sm font-medium">
                                  {item.currencytitle}
                                </p>
                                <p className=" text-sm font-medium">
                                  {item.name}
                                </p>
                              </div>
                              {suggestedCurrencies.index === "" + index && (
                                <svg
                                  className="stroke-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 128"
                                  width="16"
                                  height="16"
                                  fill={
                                    suggestedCurrencies.index === "" + index
                                      ? "#3B82F6"
                                      : "currentColor"
                                  }
                                >
                                  <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                                </svg>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>

                      <h3 className="flex text-sm font-bold mb-[8px]">
                        All currencies
                      </h3>
                      <div className="grid lg:grid-cols-4 gap-5 cursor-pointer">
                        {allCurrencies.map((item, index) => (
                          <a
                            key={index}
                            onClick={() => toggleActiveAllCurrency(index)}
                            className={`p-[12px] flex transition duration-150 ease-in-out rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                              allCurrenciesList.index === "" + index
                                ? "bg-sky-50 dark:bg-blue-500 focus:bg-sky-50 dark:focus:bg-blue-500 text-blue-400"
                                : "opacity-80"
                            }`}
                            tabIndex={0}
                          >
                            <div className="my-[4px] w-full mr-[8px] flex justify-between items-center">
                              <div className="flex flex-col items-start">
                                <p className=" text-sm font-medium">
                                  {item.curencytitle}
                                </p>
                                <p className=" text-sm font-medium">
                                  {item.name}
                                </p>
                              </div>
                              {allCurrenciesList.index === "" + index && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 128"
                                  width="16"
                                  height="16"
                                  fill={
                                    allCurrenciesList.index === "" + index
                                      ? "#3B82F6"
                                      : "currentColor"
                                  }
                                >
                                  <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                                </svg>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
