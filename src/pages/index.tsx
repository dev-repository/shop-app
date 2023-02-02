import Container from '~/components/shared/Layout/Container';
import HeroSlider from '~/components/shared/Layout/HeroSlider';

import { banners } from '~/api/mock';
import { InferGetServerSidePropsType } from 'next';
import Layout from '~/components/shared/Layout/Layout';

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
      <h1>Home</h1>
    </Container>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
