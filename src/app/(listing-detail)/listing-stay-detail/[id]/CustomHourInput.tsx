import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { customHourInput } from './constant';

interface CustomHourInputProps {
  className?: string;
  selectHour?: (value: number) => void;
}

export const CustomHourInput: React.FC<CustomHourInputProps> = (
  props: CustomHourInputProps
) => {
  const { className } = props;

  return (
    <Popover className={`flex`}>
      {({ open }) => (
        <>
          <div
            className={`flex-1 flex items-center focus:outline-none rounded-b-3xl ${
              open ? 'shadow-lg' : ''
            }`}
          >
            <Popover.Button
              className={`relative h-full rounded-3xl border-2 py-2 px-[2px] sm:px-1 mx-1 cursor-pointer text-[#9B9B9B] text-xs flex items-center justify-center`}
            >
              <span>Custom</span>
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 zindex-100 hide-scrollbar overflow-scroll max-h-[200px] md:max-h-[300px] top-6 w-full sm:min-w-[340px] max-w-sm bg-white dark:bg-neutral-800 mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 ">
              {customHourInput.map((item, index) => (
                <div key={index} className="cursor-pointer">
                  <span className="hover:text-[#898989] transition ease-in-out">
                    {item.label}
                  </span>
                </div>
              ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
