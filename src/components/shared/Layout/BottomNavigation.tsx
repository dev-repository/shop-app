import Link from 'next/link';
import CartButton from '../Common/CartButton';
import HomeIcon from '../Icon/HomeIcon';
import MenuIcon from '../Icon/MenuIcon';
import SearchIcon from '../Icon/SearchIcon';
import { Drawer } from '~/components/shared/Drawer/Drawer';
import UserIcon from '../Icon/UserIcon';

const BottomNavigation: React.FC = () => {
  function handleLogin() {
    console.log('handleLogin');
  }
  function handleMobileMenu() {
    console.log('handleMobileMenu');
  }

  return (
    <>
      <div className="md:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4">
        <button
          aria-label="Menu"
          className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
          onClick={handleMobileMenu}
        >
          <MenuIcon />
        </button>
        <button
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
          aria-label="search-button"
        >
          <SearchIcon />
        </button>
        <Link href="/" className="flex-shrink-0">
          <HomeIcon />
        </Link>
        <CartButton />
        <button
          className="flex-shrink-0 focus:outline-none"
          aria-label="search-button"
        >
          <UserIcon />
        </button>
      </div>
    </>
  );
};

export default BottomNavigation;
