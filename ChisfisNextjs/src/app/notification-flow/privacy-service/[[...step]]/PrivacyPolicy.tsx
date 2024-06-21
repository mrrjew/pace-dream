/** @format */

import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-neutral-700 dark:text-neutral-300">
      <div className="flex flex-col mt-8 gap-6">
        <h2 className="text-[2rem] md:text-[3.25rem] font-semibold leading[3.75rem] tracking-few-tight">
          Trams of Services
        </h2>
        <p className="text-base md:text-lg font-normal leading-[1.444445em] max-w[600px] tracking-few-tight">
          Lorem ipsum dolor amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="space-y-6 my-4 pt-2 text-[1.1rem] leading-[1.625rem] md:text-[1.5rem] md:leading-[2em]">
        <p className="whitespace-normal text-justify">
          Vestibulum fermentum, magna in ultricies sollicitudin, tortor augue
          rhoncus ex, sed molestie nulla nibh in enim. Mauris at interdum ex.
          Phasellus fermentum est eu ante lacinia consequat. Vivamus quis porta
          sapien, quis commodo diam. Phasellus luctus nisi ex, at aliquam orci
          tincidunt sed. Vestibulum bibendum mauris eros, quis aliquam tortor
          vestibulum id. Cras sollicitudin commodo arcu, vel faucibus ipsum
          condimentum non. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam eget condimentum
          sem. Vivamus maximus turpis laoreet malesuada varius. Nullam id ante
          non ex consectetur auctor. Fusce fringilla gravida rhoncus. Vestibulum
          finibus id lacus ac auctor. In in elementum urna. Donec fermentum
          tellus id tortor cursus cursus.
        </p>
        <p className="whitespace-normal text-justify">
          Morbi et rutrum lorem. Proin malesuada hendrerit ultrices. Nam justo
          justo, ultricies at aliquam eu, sodales quis enim. Donec semper lorem
          est, eget iaculis eros pretium et. Fusce eu placerat mi. Quisque vitae
          massa et lacus bibendum sodales eu sed dolor. Morbi et imperdiet
          dolor. Aliquam et elementum nisi.
        </p>
        <p className="whitespace-normal text-justify">
          Vivamus sed nisl nec mauris sagittis porttitor. Curabitur eu augue sit
          amet sapien congue volutpat ac at lectus. Sed at vestibulum massa.
          Donec condimentum viverra dolor, at dictum risus imperdiet quis. Ut
          mattis a felis at viverra. Nunc non mauris quam. Suspendisse luctus
          sem ornare, condimentum eros quis, convallis ante. Integer viverra
          augue at ipsum accumsan porta.
        </p>
        <p className="whitespace-normal text-justify">
          Vestibulum fermentum, magna in ultricies sollicitudin, tortor augue
          rhoncus ex, sed molestie nulla nibh in enim. Mauris at interdum ex.
          Phasellus fermentum est eu ante lacinia consequat. Vivamus quis porta
          sapien, quis commodo diam. Phasellus luctus nisi ex, at aliquam orci
          tincidunt sed. Vestibulum bibendum mauris eros, quis aliquam tortor
          vestibulum id. Cras sollicitudin commodo arcu, vel faucibus ipsum
          condimentum non. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam eget condimentum
          sem. Vivamus maximus turpis laoreet malesuada varius. Nullam id ante
          non ex consectetur auctor. Fusce fringilla gravida rhoncus. Vestibulum
          finibus id lacus ac auctor. In in elementum urna. Donec fermentum
          tellus id tortor cursus cursus.
        </p>
        <p className="whitespace-normal text-justify">
          Vestibulum fermentum, magna in ultricies sollicitudin, tortor augue
          rhoncus ex, sed molestie nulla nibh in enim. Mauris at interdum ex.
          Phasellus fermentum est eu ante lacinia consequat. Vivamus quis porta
          sapien, quis commodo diam. Phasellus luctus nisi ex, at aliquam orci
          tincidunt sed. Vestibulum bibendum mauris eros, quis aliquam tortor
          vestibulum id. Cras sollicitudin commodo arcu, vel faucibus ipsum
          condimentum non. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam eget condimentum
          sem. Vivamus maximus turpis laoreet malesuada varius. Nullam id ante
          non ex consectetur auctor. Fusce fringilla gravida rhoncus. Vestibulum
          finibus id lacus ac auctor. In in elementum urna. Donec fermentum
          tellus id tortor cursus cursus.
        </p>
        <p className="whitespace-normal text-justify">
          Morbi et rutrum lorem. Proin malesuada hendrerit ultrices. Nam justo
          justo, ultricies at aliquam eu, sodales quis enim. Donec semper lorem
          est, eget iaculis eros pretium et. Fusce eu placerat mi. Quisque vitae
          massa et lacus bibendum sodales eu sed dolor. Morbi et imperdiet
          dolor. Aliquam et elementum nisi.
        </p>
        <p className="whitespace-normal text-justify">
          Vivamus sed nisl nec mauris sagittis porttitor. Curabitur eu augue sit
          amet sapien congue volutpat ac at lectus. Sed at vestibulum massa.
          Donec condimentum viverra dolor, at dictum risus imperdiet quis. Ut
          mattis a felis at viverra. Nunc non mauris quam. Suspendisse luctus
          sem ornare, condimentum eros quis, convallis ante. Integer viverra
          augue at ipsum accumsan porta.
        </p>
      </div>
      <div className="mt-2 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6">
        <ButtonPrimary className="w-full md:w-[150px]" type="button">
          Accept
        </ButtonPrimary>
        <ButtonSecondary className="w-full md:w-[150px]" type="button">
          Dicline
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
