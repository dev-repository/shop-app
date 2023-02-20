import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface HeaderMenuProps {
  className?: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ className }) => {
  return (
    <nav className={classNames(`headerMenu flex w-full relative`, className)}>
      <div className={`menuItem group cursor-pointer py-7`}>
        <Link
          href="/"
          className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
        >
          의류
        </Link>
      </div>
      <div className={`menuItem group cursor-pointer py-7`}>
        <Link
          href="/"
          className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
        >
          스포츠
        </Link>
      </div>
      <div className={`menuItem group cursor-pointer py-7`}>
        <Link
          href="/"
          className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
        >
          패션잡화
        </Link>
      </div>
    </nav>
  );
};

export default HeaderMenu;
