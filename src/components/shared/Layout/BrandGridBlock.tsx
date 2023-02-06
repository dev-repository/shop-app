import BrandCard from '~/components/shared/Common/BrandCard';
import SectionHeader from '~/components/shared/Layout/SectionHeader';
import { brands as b } from '~/api/mock';

interface BrandProps {
  sectionHeading: string;
  className?: string;
  limit?: number;
  variant?: '6column' | '4column';
}

const BrandGridBlock: React.FC<BrandProps> = ({
  className = 'mb-12 md:mb-14 xl:mb-16',
  sectionHeading,
  variant = '4column',
  limit = 16,
}) => {
  const brands = b.brandsGrid;

  const columnClasses =
    variant === '4column'
      ? 'grid-cols-2 sm:grid-cols-4'
      : 'grid-cols-2 sm:grid-cols-4 2xl:grid-cols-6';
  return (
    <div className={className}>
      <SectionHeader sectionHeading={sectionHeading} />
      <div
        className={`grid ${columnClasses} gap-2.5 md:gap-3 lg:gap-5 xl:gap-7`}
      >
        {brands?.slice(0, limit).map((brand) => (
          <BrandCard key={`brand--key${brand.id}`} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandGridBlock;
