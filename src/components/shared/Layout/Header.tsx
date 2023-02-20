import React, { useRef } from 'react';
import Logo from '~/components/shared/Layout/Logo';
import { useAddActiveScroll } from '~/libs/hooks/useAddActiveScroll';
import { useApiHookStore } from '~/store/useLayoutStore';
import CartButton from '../Common/CartButton';
import AuthMenu from './AuthMenu';
import HeaderMenu from './HeaderMenu';

const Header: React.FC = () => {
  const $ref = useRef<HTMLElement | null>(null);

  const { openModal } = useApiHookStore();

  useAddActiveScroll($ref);

  return (
    <header
      id="siteHeader"
      ref={$ref}
      className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
    >
      <div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
          <button
            aria-label="Menu"
            className="menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
          >
            <span className="menuIcon">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>
          <Logo />

          <HeaderMenu className="hidden lg:flex md:ms-6 xl:ms-10" />

          <div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
            <div className="-mt-0.5 flex-shrink-0">
              <AuthMenu
                isAuthorized={false}
                href="/"
                className="text-sm xl:text-base text-heading font-semibold"
                btnProps={{
                  className:
                    'text-sm xl:text-base text-heading font-semibold focus:outline-none',
                  children: 'Sign In',
                  onClick: () => {
                    console.log('handleLogin');
                    openModal('LOGIN');
                  },
                }}
              >
                Account
              </AuthMenu>
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
