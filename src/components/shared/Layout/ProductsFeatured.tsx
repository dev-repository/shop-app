import SectionHeader from '~/components/shared/Layout/SectionHeader';
import ProductOverlayCard from '~/components/shared/Common/ProductOverlayCard';

import { products } from '~/api/mock';

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  limit?: number;
  variant?: 'left' | 'center' | 'combined';
}

const ProductsFeatured: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = 'mb-12 md:mb-14 xl:mb-16',
  variant = 'left',
  limit = 5,
}) => {
  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />
      <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
        {products.slice(0, limit).map((product, idx: number) => (
          <ProductOverlayCard
            key={`product--key${product.id}`}
            product={product}
            variant={variant}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsFeatured;
