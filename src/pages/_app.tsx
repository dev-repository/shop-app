import '~/assets/css/scrollbar.css';
import '~/assets/css/swiper-carousel.css';
import '~/assets/css/custom-plugins.css';
import '~/assets/css/tailwind.css';

import Provider from '~/store/provider';
import { SessionProvider } from 'next-auth/react';

// types
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Open_Sans } from '@next/font/google';
import { trpc } from '~/utils/trpc';
import classNames from 'classnames';

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

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={classNames(openSans.className)}>
      <SessionProvider session={session}>
        <Provider
          pageProps={pageProps}
          isLoggedIn={false}
          currentProfile={null}
        >
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </SessionProvider>
    </div>
  );
}

export default trpc.withTRPC(App);
