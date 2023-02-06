import React from 'react';
import classNames from 'classnames';

import Carousel from '~/components/shared/Common/Carousel';
import IconCard from '~/components/shared/Common/IconCard';
import SectionHeader from '~/components/shared/Layout/SectionHeader';
import { SwiperSlide } from 'swiper/react';

// types
import type { Argument } from 'classnames';

// data
import { categories } from '~/api/mock';

interface HomeCategoriesProps {
  sectionHeading: string;
  className?: Argument;
  variant?: 'default' | 'modern';
}

const HomeCategories: React.FC<HomeCategoriesProps> = ({
  className = 'mb-12 md:mb-14 xl:mb-16',
  sectionHeading,
  variant = 'default',
}) => {
  return (
    <div className={classNames(className)}>
      <SectionHeader sectionHeading={sectionHeading} />
      <Carousel
        autoplay={false}
        breakpoints={{
          '1025': {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '480': {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          '0': {
            slidesPerView: 1,
            spaceBetween: 12,
          },
        }}
        buttonGroupClassName="-mt-2 md:-mt-2"
      >
        {categories.data.map((category) => (
          <SwiperSlide key={`category--key-${category.id}`}>
            <IconCard
              item={category}
              href="/"
              effectActive={true}
              variant={variant}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCategories;
