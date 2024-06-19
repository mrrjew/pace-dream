import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const topCurrencies = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "SEK",
  "NZD",
  "NOK",
  "SGD",
  "KRW",
  "TRY",
  "MXN",
  "INR",
  "RUB",
  "BRL",
  "ZAR",
  "HKD",
  "CZK",
  "PLN",
  "THB",
  "IDR",
  "HUF",
  "DKK",
  "PHP",
  "MYR",
  "ILS",
  "AED",
  "CLP",
  "SAR",
  "RON",
  "COP",
  "BHD",
  "EGP",
  "KWD",
  "NGN",
  "PKR",
  "QAR",
];

const CurrencyModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                <button
                  className="absolute top-4 right-4 text-gray-500 cursor-pointer"
                  onClick={onClose}
                  ref={cancelButtonRef}
                >
                  X
                </button>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* You can replace the icon with your preferred currency symbol */}
                      <span className="text-2xl">$</span>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Select Currency
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Choose your preferred currency:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3">
                  <div className="grid grid-cols-4 gap-4">
                    {topCurrencies.map((currency, index) => (
                      <button
                        key={index}
                        className="btn"
                        onClick={() => onClose(currency)}
                      >
                        <div>{currency}</div>
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

export default CurrencyModal;
