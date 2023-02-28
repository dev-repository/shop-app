import Text from '~/components/shared/Common/Text';
import FilterIcon from '~/components/shared/Icon/FilterIcon';
import ListBox from '~/components/ui/ListBox';
import { Drawer } from '~/components/shared/Common/drawer/drawer';
import { getDirection } from '~/utils/getDirection';
import { useRouter } from 'next/router';

const SearchTopBar = () => {
  const { locale } = useRouter();
  const dir = getDirection(locale);
  const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };

  return (
    <div className="flex justify-between items-center mb-7">
      <Text variant="pageHeading" className="hidden lg:inline-flex pb-1">
        Casual Wear
      </Text>
      <button
        type="button"
        className="lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200"
      >
        <FilterIcon />
        <span className="ps-2.5">Filters</span>
      </button>

      <div className="flex items-center justify-end">
        <div className="flex-shrink-0 text-body text-xs md:text-sm leading-4 pe-4 md:me-6 ps-2 hidden lg:block">
          9,608 개
        </div>
        <ListBox
          options={[
            { name: 'text-sorting-options', value: 'options' },
            { name: 'text-newest', value: 'newest' },
            { name: 'text-popularity', value: 'popularity' },
            { name: 'text-price-low-high', value: 'low-high' },
            { name: 'text-price-high-low', value: 'high-low' },
          ]}
        />
      </div>
      <Drawer
        placement={dir === 'rtl' ? 'right' : 'left'}
        // open={displayFilter}
        // onClose={closeFilter}
        // handler={false}
        // showMask={true}
        // level={null}
        contentWrapperStyle={contentWrapperCSS}
      ></Drawer>
    </div>
  );
};

export default SearchTopBar;
