// import Header from '@components/layout/header/header';
// import Footer from '@components/layout/footer/footer';
// import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
// import Search from '@components/common/search';
// import CookieBar from '@components/common/cookie-bar';
// import { useAcceptCookies } from '@utils/use-accept-cookies';
// import Button from '@components/ui/button';
// import { useTranslation } from 'next-i18next';

import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  //   const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  //   const { t } = useTranslation('common');
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="relative flex-grow"
        style={{
          minHeight: '-webkit-fill-available',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
      {/* <MobileNavigation />
      <Search />
      <CookieBar
        title={t('text-cookies-title')}
        hide={acceptedCookies}
        action={
          <Button onClick={() => onAcceptCookies()} variant="slim">
            {t('text-accept-cookies')}
          </Button>
        }
      /> */}
    </div>
  );
};

export default Layout;
