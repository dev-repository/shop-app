import React from 'react';
import Layout from '~/components/shared/Layout/Layout';
import Divider from '~/components/ui/divider';
import Container from '~/components/ui/container';
import Breadcrumb from '~/components/shared/Modal/breadcrumb';
import ProductSingleDetails from '~/components/product/ProductSingleDetails';

const Name = () => {
  return (
    <>
      <Divider className="mb-0" />
      <Container>
        <div className="pt-8">
          <Breadcrumb />
        </div>
        <ProductSingleDetails />
      </Container>
    </>
  );
};

export default Name;

Name.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
