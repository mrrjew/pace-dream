import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";


const topLanguages = [
    { country: "China", language: "Mandarin Chinese", script: "中文", flag: "🇨🇳", code: "CN" },
    { country: "Spain", language: "Spanish", script: "Español", flag: "🇪🇸", code: "ES" },
    { country: "United States", language: "English", script: "English", flag: "🇺🇸", code: "US" },
    { country: "India", language: "Hindi", script: "हिन्दी", flag: "🇮🇳", code: "IN" },
    { country: "Saudi Arabia", language: "Arabic", script: "العربية", flag: "🇸🇦", code: "SA" },
    { country: "Portugal", language: "Portuguese", script: "Português", flag: "🇵🇹", code: "PT" },
    { country: "Russia", language: "Russian", script: "Русский", flag: "🇷🇺", code: "RU" },
    { country: "Indonesia", language: "Indonesian", script: "Bahasa Indonesia", flag: "🇮🇩", code: "ID" },
    { country: "France", language: "French", script: "Français", flag: "🇫🇷", code: "FR" },
    { country: "Germany", language: "German", script: "Deutsch", flag: "🇩🇪", code: "DE" },
    { country: "Turkey", language: "Turkish", script: "Türkçe", flag: "🇹🇷", code: "TR" },
    { country: "Italy", language: "Italian", script: "Italiano", flag: "🇮🇹", code: "IT" },
    { country: "Thailand", language: "Thai", script: "ไทย", flag: "🇹🇭", code: "TH" },
    { country: "Netherlands", language: "Dutch", script: "Nederlands", flag: "🇳🇱", code: "NL" },
    { country: "South Korea", language: "Korean", script: "한국어", flag: "🇰🇷", code: "KR" },
    { country: "Philippines", language: "Filipino", script: "Filipino", flag: "🇵🇭", code: "PH" },
    { country: "Japan", language: "Japanese", script: "日本語", flag: "🇯🇵", code: "JP" },
    { country: "Vietnam", language: "Vietnamese", script: "Tiếng Việt", flag: "🇻🇳", code: "VN" },
    { country: "Kenya", language: "Swahili", script: "Kiswahili", flag: "🇰🇪", code: "KE" },
    { country: "Poland", language: "Polish", script: "Polski", flag: "🇵🇱", code: "PL" },
    { country: "Ukraine", language: "Ukrainian", script: "Українська", flag: "🇺🇦", code: "UA" },
    { country: "Romania", language: "Romanian", script: "Română", flag: "🇷🇴", code: "RO" },
    { country: "Malaysia", language: "Malay", script: "Bahasa Melayu", flag: "🇲🇾", code: "MY" },
    { country: "Czech Republic", language: "Czech", script: "Čeština", flag: "🇨🇿", code: "CZ" },
    { country: "Iran", language: "Farsi (Persian)", script: "فارسی", flag: "🇮🇷", code: "IR" },
    { country: "Nigeria", language: "Hausa", script: "Hausa", flag: "🇳🇬", code: "NG" },
    { country: "Myanmar", language: "Burmese", script: "မြန်မာ", flag: "🇲🇲", code: "MM" },
    { country: "Ethiopia", language: "Amharic", script: "አማርኛ", flag: "🇪🇹", code: "ET" },
    { country: "Philippines", language: "Tagalog", script: "Tagalog", flag: "🇵🇭", code: "PH" },
    { country: "Cambodia", language: "Khmer", script: "ភាសាខ្មែរ", flag: "🇰🇭", code: "KH" },
    { country: "Iraq", language: "Kurdish", script: "Kurdî", flag: "🇭🇺", code: "IQ" },
  ];


  const CountryModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: any }) => {
    const cancelButtonRef = useRef(null);

    return (
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" initialFocus={cancelButtonRef} onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-screen sm:max-w-3xl">
                  <button
                    className="absolute top-4 right-4 text-gray-500 cursor-pointer"
                    onClick={onClose}
                    ref={cancelButtonRef}
                  >
                    X
                  </button>
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">

                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Select Currency
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">Choose your preferred currency:</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3">
                    <div className="grid grid-cols-4 gap-4">
                      {topLanguages.map((language, index) => (
                        <button key={index} className="btn" onClick={() => onClose(language)}>
                          <div>
                            {language.flag} {language.country}
                          </div>
                          <div>{language.script}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };

export default CountryModal;
