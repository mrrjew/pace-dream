import React, { HTMLAttributes, ReactNode } from "react";

export interface Heading3Props extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  isCenter?: boolean;
}

const Heading3: React.FC<Heading3Props> = ({
  children,
  desc = "Discover the most outstanding articles in all topics of life. ",
  className = "mb-10 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  ...args
}) => {
  return (
    <div className={`nc-Section-Heading3 relative ${className}`}>
      <div
        className={
          isCenter ? "text-center w-full md:max-w-2xl mx-auto mb-4" : "max-w-2xl"
        }
      >
        <h2 className={`text-[#192946] text-3xl md:text-4xl font-semibold`} {...args}>
          {children || `Section Heading3`}
        </h2>
        {desc && (
          <span className="block mt-2 md:mt-3 font-normal lg:text-base text-neutral-500">
            {desc}
          </span>
        )}
      </div>
    </div>
  );
};

export default Heading3;