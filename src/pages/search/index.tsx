import React from 'react';
import Link from 'next/link';
import StickyBox from 'react-sticky-box';
import Layout from '~/components/shared/Layout/Layout';
import Container from '~/components/ui/container';
import { BreadcrumbItems } from '~/components/search/Breadcrumb';
import SearchTopBar from '~/components/search/TopBar';

export default function Shop() {
  return (
    <>
      <Container>
        <div className="flex pt-8 pb-16 lg:pb-20">
          <div className="flex-shrink-0 pe-24 hidden lg:block w-96">
            <StickyBox offsetTop={50} offsetBottom={20}>
              <div className="pb-7">
                <BreadcrumbItems separator="/">
                  <Link className="text-heading" href={'/'}>
                    <p>Home</p>
                  </Link>

                  <Link className="font-semibold text-heading" href={'/search'}>
                    <p className="capitalize">Search</p>
                  </Link>
                </BreadcrumbItems>
              </div>
              {/* ShopFilters */}
            </StickyBox>
          </div>

          <div className="w-full lg:-ms-9">
            <SearchTopBar />
            {/* ProductGrid */}
          </div>
        </div>
        {/* Subscription */}
      </Container>
    </>
  );
}

Shop.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
