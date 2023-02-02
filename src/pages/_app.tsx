import '~/assets/css/scrollbar.css';
import '~/assets/css/swiper-carousel.css';
import '~/assets/css/custom-plugins.css';
import '~/assets/css/tailwind.css';

import Provider from '~/store/provider';

// types
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Open_Sans, Satisfy } from '@next/font/google';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  isLoggedIn?: boolean;
  currentProfile?: any;
}

const openSans = Open_Sans({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '600', '700'],
});

const satisfy = Satisfy({
  weight: ['400'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Provider pageProps={pageProps} isLoggedIn={false} currentProfile={null}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily}, ${satisfy.style.fontFamily};
        }
      `}</style>
    </>
  );
}
