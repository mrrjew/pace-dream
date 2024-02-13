'use client';

import React, { Fragment, useEffect, useRef, useState } from 'react';
// import { ShoppingBagIcon as ShoppingCartIcon, Cog8ToothIcon as CogIcon } from '@heroicons/react/24/outline';
// import { Popover, Transition } from '@headlessui/react';
import { PathName } from '@/routers/types';
// import Link from 'next/link';
import Header from './Header';
// import Header3 from './Header3';
import { usePathname } from 'next/navigation';
import { useThemeMode } from '@/utils/useThemeMode';

export type SiteHeaders = 'Header 1' | 'Header 2' | 'Header 3';

// interface HomePageItem {
//   name: string;
//   slug: PathName;
// }

let OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};
let OBSERVER: IntersectionObserver | null = null;
const PAGES_HIDE_HEADER_BORDER: PathName[] = ['/home-3', '/listing-car-detail', '/listing-experiences-detail', '/listing-stay-detail'];

const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [headerSelected, setHeaderSelected] = useState<SiteHeaders>('Header 2');

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
  }, []);
  //
  useThemeMode();
  //
  const pathname = usePathname();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
    });
  };

  useEffect(() => {

    if (!PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      OBSERVER && OBSERVER.disconnect();
      OBSERVER = null;
      return;
    }
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      anchorRef.current && OBSERVER.observe(anchorRef.current);
    }
  }, [pathname]);

  const renderHeader = () => {
    let headerClassName = 'shadow-sm dark:border-b dark:border-neutral-700';
    if (PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
      headerClassName = isTopOfPage ? '' : 'shadow-sm dark:border-b dark:border-neutral-700';
    }
    switch (headerSelected) {
      // case 'Header 1':
      //   return (
      //     <Header
      //       className={headerClassName}
      //       navType='MainNav1'
      //     />
      //   );
      case 'Header 2':
        return (
          <Header
            className={headerClassName}
            navType='MainNav2'
          />
        );
      // case 'Header 3':
      //   return <Header3 className={headerClassName} />;

      default:
        return (
          <Header
            className={headerClassName}
            navType='MainNav2'
          />
        );
    }
  };

  return (
    <>
      {/* {renderControlSelections()} */}
      {renderHeader()}
      <div
        ref={anchorRef}
        className='h-1 absolute invisible'></div>
    </>
  );
};

export default SiteHeader;
