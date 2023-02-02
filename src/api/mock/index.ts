export interface Banner {
  id: number;
  title: string;
  slug: string;
  image: Image;
}

export interface Image {
  mobile: Mobile;
  desktop: Desktop;
}

export interface Mobile {
  url: string;
  width: number;
  height: number;
}

export interface Desktop {
  url: string;
  width: number;
  height: number;
}

export const banners = [
  {
    id: 1,
    title: 'We picked every item with care you must try',
    slug: 'winter-collection',
    image: {
      mobile: {
        url: '/assets/images/hero/banner-mobile-4.jpg',
        width: 690,
        height: 480,
      },
      desktop: {
        url: '/assets/images/hero/banner-4.jpg',
        width: 1800,
        height: 800,
      },
    },
  },
  {
    id: 2,
    title: 'We picked every item with care you must try',
    slug: 'winter-collection',
    image: {
      mobile: {
        url: '/assets/images/hero/banner-mobile-5.jpg',
        width: 690,
        height: 480,
      },
      desktop: {
        url: '/assets/images/hero/banner-5.jpg',
        width: 1800,
        height: 800,
      },
    },
  },
  {
    id: 3,
    title: 'We picked every item with care you must try',
    slug: 'winter-collection',
    image: {
      mobile: {
        url: '/assets/images/hero/banner-mobile-6.jpg',
        width: 690,
        height: 480,
      },
      desktop: {
        url: '/assets/images/hero/banner-6.jpg',
        width: 1800,
        height: 800,
      },
    },
  },
] as Banner[];
