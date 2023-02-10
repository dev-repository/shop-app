import React from 'react';
import SectionHeader from '~/components/shared/Layout/SectionHeader';
import ProductCard from '~/components/shared/Common/ProductCard';

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  products?: any[];
  loading: boolean;
  error?: string;
  uniqueKey?: string;
}

const ProductsBlock: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = 'mb-9 md:mb-10 xl:mb-12',
  products,
}) => {
  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
        {products?.map((product: any) => (
          <ProductCard
            key={`product--key${product.id}`}
            product={product}
            imgWidth={340}
            imgHeight={440}
            variant="grid"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsBlock;
