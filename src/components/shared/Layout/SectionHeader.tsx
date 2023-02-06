import Text from '~/components/shared/Common/Text';
import Link from 'next/link';
import classNames from 'classnames';

interface SectionHeaderProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionHeading,
  categorySlug,
  className = 'pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8',
}) => {
  return (
    <div
      className={classNames(
        'flex items-center justify-between mt-2',
        className,
      )}
    >
      <Text variant="mediumHeading">{sectionHeading}</Text>
      {categorySlug && (
        <Link
          href={categorySlug}
          className="text-xs lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1"
        >
          {/* {t('text-see-all-product')} */}
          ???
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
