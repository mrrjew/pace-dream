import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import countryList from "@/utils/countryList.json";

export const suggestedLanguage = [
  {
    countryImg:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
    countryLang: "हिन्दी",
    active: true,
  },
  {
    countryImg:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
    countryLang: "English (US)",
    active: true,
  },
  {
    countryImg:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
    countryLang: "Français",
    active: true,
  },
  {
    countryImg:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
    countryLang: "简体中文",
    active: true,
  },
  {
    countryImg:
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
    countryLang: "Deutsch",
    active: true,
  },
];

export default function LanguageModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [suggestedLanguages, setSuggestedLanguages] = useState({ index: "" });
  const [allLanguageList, setAllLanguageList] = useState({ index: "" });

  function toggleActiveSuggestedLanguage(index: any) {
    setSuggestedLanguages({ index: String(index) });
  }

  function toggleActiveAllLanguage(index: any) {
    setAllLanguageList({ index: String(index) });
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
                          Select your language
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
                      <h3 className=" flex text-sm font-bold mb-[8px]">
                        Suggested for you
                      </h3>
                      <div className="grid lg:grid-cols-4 gap-4 cursor-pointer">
                        {suggestedLanguage.map((item, index) => (
                          <a
                            key={index}
                            onClick={() => toggleActiveSuggestedLanguage(index)}
                            className={` p-[12px] flex transition duration-150 ease-in-out rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                              suggestedLanguages.index === String(index)
                                ? "bg-sky-50 dark:bg-blue-500 focus:bg-sky-50 dark:focus:bg-blue-500 text-blue-400"
                                : "opacity-80"
                            }`}
                            tabIndex={0}
                          >
                            <div className="my-[4px] w-full mr-[8px] flex justify-between items-center ">
                              <div className="flex justify-between items-center gap-3">
                                {item.countryImg && (
                                  <div className="w-6 h-6 rounded-full overflow-hidden">
                                    <img
                                      src={item.countryImg}
                                      alt={item.countryImg}
                                      className="w-full h-full object-cover scale-500"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transform: "scale(2)",
                                      }}
                                    />
                                  </div>
                                )}
                                <p className=" text-sm font-medium">
                                  {item.countryLang}
                                </p>
                              </div>
                              {suggestedLanguages.index === String(index) && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 128"
                                  width="16"
                                  height="16"
                                  fill={
                                    suggestedLanguages.index === String(index)
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
                        All languages
                      </h3>
                      <div className="grid lg:grid-cols-4 gap-5 cursor-pointer">
                        {countryList.map((item, index) => (
                          <a
                            key={index}
                            onClick={() => toggleActiveAllLanguage(index)}
                            className={`p-[12px] flex transition duration-150 ease-in-out rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                              allLanguageList.index === index + ""
                                ? "bg-sky-50 dark:bg-blue-500 focus:bg-sky-50 dark:focus:bg-blue-500 text-blue-400"
                                : "opacity-80"
                            }`}
                            tabIndex={0}
                          >
                            <div className="my-[4px] w-full mr-[8px] flex justify-between items-center">
                              <div className="flex justify-between items-center gap-3">
                                {item.image && (
                                  <div className="w-6 h-6 rounded-full overflow-hidden min-w-6">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="w-full h-full object-cover scale-500"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transform: "scale(2)",
                                      }}
                                    />
                                  </div>
                                )}
                                <p className=" text-sm font-medium">
                                  {item.name}
                                </p>
                              </div>
                              {allLanguageList.index === index + "" && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 128"
                                  width="16"
                                  height="16"
                                  fill={
                                    allLanguageList.index === index + ""
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
