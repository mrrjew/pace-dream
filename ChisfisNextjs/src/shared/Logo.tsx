import logoLightImg from '@/images/PaceDreamLogo .svg';
import logoImg from '@/images/PaceDreamLogo .svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = 'w-24',
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {img ? (
        <Image className="max-h-12 dark:hidden" src={img} alt="Logo" />
      ) : (
        'Logo Here'
      )}
      {imgLight && (
        <Image
          className="hidden max-h-12 dark:block"
          src={imgLight}
          alt="Logo-Light"
        />
      )}
    </Link>
  );
};

export default Logo;
