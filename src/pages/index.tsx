import Container from '~/components/shared/Layout/Container';
import HeroSlider from '~/components/shared/Layout/HeroSlider';

import { banners, homeSixCoupons, productNewArrivals } from '~/api/mock';
import { InferGetServerSidePropsType } from 'next';
import Layout from '~/components/shared/Layout/Layout';
import HomeCategories from '~/components/shared/Layout/HomeCategories';
import ProductsFeatured from '~/components/shared/Layout/ProductsFeatured';
import BannerCard from '~/components/shared/Common/BannerCard';
import ProductsBlock from '~/components/shared/Layout/ProductsBlock';
import BrandGridBlock from '~/components/shared/Layout/BrandGridBlock';

export const getServerSideProps = async () => {
  return {
    props: {
      banners,
    },
  };
};

export default function Home({
  banners,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container>
      <HeroSlider data={banners} buttonGroupClassName="hidden" />
      <HomeCategories sectionHeading="Featured Categories" />
      <ProductsFeatured
        limit={4}
        variant="combined"
        sectionHeading="Featured Products"
      />
      <BannerCard
        banner={homeSixCoupons}
        href="/"
        className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
      />
      <ProductsBlock
        sectionHeading="New Arrivals"
        products={productNewArrivals}
        loading={false}
        error={undefined}
      />
      <BrandGridBlock
        sectionHeading="Top Brands"
        limit={12}
        variant="6column"
      />
    </Container>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
