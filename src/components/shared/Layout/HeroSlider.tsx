import React from 'react';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import { SwiperSlide } from 'swiper/react';

import Carousel from '~/components/shared/Common/Carousel';

const BannerCardDynamic = dynamic(
  () => import('~/components/shared/Common/BannerCard'),
  {
    ssr: false,
  },
);

interface HeroSliderProps {
  data: any;
  className?: cn.ArgumentArray;
  buttonGroupClassName?: string;
  variant?: 'box' | 'fullWidth';
  variantRounded?: 'rounded' | 'default';
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  className = 'mb-12 md:mb-14 xl:mb-[60px]',
  variant = 'box',
  variantRounded = 'rounded',
  buttonGroupClassName = '',
  data,
}) => {
  return (
    <div
      className={cn(
        'relative mb-5 md:mb-8',
        {
          'mx-auto max-w-[1920px]': variant === 'fullWidth',
        },
        className,
      )}
    >
      <Carousel
        autoplay={{
          delay: 5000,
        }}
        className={`mx-0 ${
          variant === 'fullWidth' ? 'carousel-full-width' : ''
        }`}
        paginationPosition="left"
        prevButtonClasses="start-6 md:start-8 xl:start-12 2xl:start-16"
        nextButtonClasses="end-6 md:end-8 xl:end-12 2xl:end-16"
        buttonGroupClassName={buttonGroupClassName}
        nextActivateId="hero-slider-next"
        prevActivateId="hero-slider-prev"
        pagination={{
          clickable: true,
        }}
      >
        {data?.map((banner: any) => (
          <SwiperSlide
            className="carouselItem"
            key={`banner--key-${banner?.id}`}
          >
            <BannerCardDynamic
              banner={banner}
              href="/"
              variant={variantRounded}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;
