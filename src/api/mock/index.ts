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

export const categories = {
  data: [
    {
      id: 1,
      name: 'Woman',
      slug: 'woman',
      productCount: 20,
      icon: '/assets/images/category/icons/woman.png',
      tags: ['shovia', 'fusion', 'elegance', 'fashadil', 'blaze'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/woman.jpg',
        original: '/assets/images/category/woman.jpg',
      },
    },
    {
      id: 2,
      name: 'Man',
      slug: 'man',
      productCount: 20,
      icon: '/assets/images/category/icons/man.png',
      tags: ['shovia', 'fusion', 'elegance', 'blaze'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/man.jpg',
        original: '/assets/images/category/man.jpg',
      },
    },
    {
      id: 3,
      name: 'Watch',
      slug: 'watch',
      productCount: 20,
      icon: '/assets/images/category/icons/watch.png',
      tags: ['fusion', 'elegance', 'blaze'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/watch.jpg',
        original: '/assets/images/category/watch.jpg',
      },
    },
    {
      id: 4,
      name: 'Kids',
      slug: 'kids',
      productCount: 20,
      icon: '/assets/images/category/icons/kids.png',
      tags: ['shovia', 'fusion', 'elegance', 'fashadil', 'blaze'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/kid.jpg',
        original: '/assets/images/category/kid.jpg',
      },
    },
    {
      id: 5,
      name: 'Sports',
      slug: 'sports',
      productCount: 20,
      icon: '/assets/images/category/icons/sports.png',
      tags: ['fusion', 'elegance', 'blaze'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/sports.jpg',
        original: '/assets/images/category/sports.jpg',
      },
    },
    {
      id: 6,
      name: 'Sunglass',
      slug: 'sunglass',
      productCount: 20,
      icon: '/assets/images/category/icons/sunglass.png',
      tags: ['shovia', 'fusion', 'elegance', 'fashadil', 'blaze'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/sunglass.jpg',
        original: '/assets/images/category/sunglass.jpg',
      },
    },
    {
      id: 7,
      name: 'Bags',
      slug: 'bags',
      productCount: 20,
      icon: '/assets/images/category/icons/bags.png',
      tags: ['shovia', 'fusion', 'elegance', 'blaze'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/bags.jpg',
        original: '/assets/images/category/bags.jpg',
      },
    },
    {
      id: 8,
      name: 'Sneakers',
      slug: 'sneakers',
      productCount: 20,
      icon: '/assets/images/category/icons/sneakers.png',
      tags: ['shovia', 'fusion', 'elegance', 'fashadil', 'blaze', 'club'],
      image: {
        id: 1,
        thumbnail: '/assets/images/category/sneakers.jpg',
        original: '/assets/images/category/sneakers.jpg',
      },
    },
  ],
};

export const products = [
  {
    id: 1,
    name: 'Nike Bag',
    description:
      'Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement',
    slug: 'nike-bag',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/featured/1.png',
      original: '/assets/images/products/featured/1.png',
    },
    price: 20.38,
    sale_price: 16.38,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Adidas Woolen Cap',
    description:
      'Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world following the counterculture of the 1960s.',
    slug: 'adidas-woolen-cap',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/featured/2.png',
      original: '/assets/images/products/featured/2.png',
    },
    price: 20.0,
    sale_price: 16.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Nike Leader VT',
    description:
      'Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.',
    slug: 'nike-leader-vt',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/featured/3.png',
      original: '/assets/images/products/featured/3.png',
    },
    price: '',
    sale_price: 16.38,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Ray ban Aviator',
    description:
      'Polarized sunglasses reduce glare reflected off of roads, bodies of water, snow and other horizontal surfaces.Restore true color.Vision lenses are 400UV rated, meaning it can block UVA and UVB radiation.',
    slug: 'ray-ban-aviator',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/featured/4.png',
      original: '/assets/images/products/featured/4.png',
    },
    price: 850.0,
    sale_price: 720.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Tissot Classic',
    description:
      'The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement,',
    slug: 'tissot-classic',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/featured/5.png',
      original: '/assets/images/products/featured/5.png',
    },
    price: '20.38',
    sale_price: 600.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
];

export const homeSixCoupons = {
  id: 3,
  title: 'We picked every item with care you must try',
  slug: 'winter-collection',
  image: {
    mobile: {
      url: '/assets/images/banner/banner-mobile-7.jpg',
      width: 690,
      height: 300,
    },
    desktop: {
      url: '/assets/images/banner/banner-7.jpg',
      width: 1800,
      height: 800,
    },
  },
};

export const productNewArrivals = [
  {
    id: 1,
    name: 'Armani Veni Vidi Vici',
    description:
      'Fendi began life in 1925 as a fur and leather speciality store in Rome.',
    slug: 'armani-veni-vidi-vici',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-11.png',
      original: '/assets/images/products/p-11-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-11-1.png',
        original: '/assets/images/products/p-11-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-11-2.png',
        original: '/assets/images/products/p-11-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-11-3.png',
        original: '/assets/images/products/p-11-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-11-4.png',
        original: '/assets/images/products/p-11-4.png',
      },
    ],
    price: 20.0,
    sale_price: 17.99,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'H&M Global Desi',
    description:
      'Blue solid woven regular top, curved hem with tassell detailing has shoulder straps, and sleeveless',
    slug: 'hm-global-desi',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-22.png',
      original: '/assets/images/products/p-22-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-22-1.png',
        original: '/assets/images/products/p-22-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-22-2.png',
        original: '/assets/images/products/p-22-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-12-3.png',
        original: '/assets/images/products/p-12-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-12-4.png',
        original: '/assets/images/products/p-12-4.png',
      },
    ],
    price: 40.0,
    sale_price: 30.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Zara Solly White Shirt',
    description:
      'For a chic and smart look, don this white shirt from Solly by Allen Solly. Crafted from a cotton-nylon blend with a hint of stretch, this design features a dotted pattern. Wear this 3/4th sleeves shirt with trousers and wedges to a client meeting.',
    slug: 'zara-solly-white-shirt',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-18.png',
      original: '/assets/images/products/p-18-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-18-1.png',
        original: '/assets/images/products/p-18-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-18-2.png',
        original: '/assets/images/products/p-18-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-18-3.png',
        original: '/assets/images/products/p-18-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-18-4.png',
        original: '/assets/images/products/p-18-4.png',
      },
    ],
    price: 32.0,
    sale_price: 25.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Hermes  Carlton London',
    description:
      'Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem',
    slug: 'hermes-carlton-london',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-14.png',
      original: '/assets/images/products/p-14-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-14-1.png',
        original: '/assets/images/products/p-14-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-14-2.png',
        original: '/assets/images/products/p-14-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-14-3.png',
        original: '/assets/images/products/p-14-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-14-4.png',
        original: '/assets/images/products/p-14-4.png',
      },
    ],
    price: '',
    sale_price: 15.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Scuba Stand Collar Topper Jacket',
    description:
      'Zara provides only the highest-quality selection of dresses, womens suits, and suited separates.',
    slug: 'scuba-stand-collar-topper-jacket',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-15.png',
      original: '/assets/images/products/p-15-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-15-1.png',
        original: '/assets/images/products/p-15-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-15-2.png',
        original: '/assets/images/products/p-15-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-15-3.png',
        original: '/assets/images/products/p-15-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-15-4.png',
        original: '/assets/images/products/p-15-4.png',
      },
    ],
    price: 16.0,
    sale_price: 12.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 6,
    name: 'Armani Wide-Leg Trousers',
    description:
      'Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.',
    slug: 'armani-wide-leg-trousers',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-16.png',
      original: '/assets/images/products/p-16-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-16-1.png',
        original: '/assets/images/products/p-16-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-16-2.png',
        original: '/assets/images/products/p-16-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-16-3.png',
        original: '/assets/images/products/p-16-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-16-4.png',
        original: '/assets/images/products/p-16-4.png',
      },
    ],
    price: 80.0,
    sale_price: 60.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 7,
    name: 'Short Sleeve Shirts For Men',
    description:
      'From casual days out to parties, dinners and other events that call for a dressier look, a short sleeve shirt is a versatile piece that works for all kinds of occasions.',
    slug: 'short-sleeve-shirts-for-men',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-17.png',
      original: '/assets/images/products/p-17-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-17-1.png',
        original: '/assets/images/products/p-17-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-17-2.png',
        original: '/assets/images/products/p-17-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-17-3.png',
        original: '/assets/images/products/p-17-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-17-4.png',
        original: '/assets/images/products/p-17-4.png',
      },
    ],
    price: 18.99,
    sale_price: 12.99,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 8,
    name: 'Blazer And A Neck Scarf',
    description:
      'blue short sleeve basic midi dress featuring a crew neckline in a jersey fabric.',
    slug: 'blazer-and-a-neck-scarf',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-13.png',
      original: '/assets/images/products/p-13-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-13-1.png',
        original: '/assets/images/products/p-13-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-13-2.png',
        original: '/assets/images/products/p-13-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-13-1.png',
        original: '/assets/images/products/p-13-1.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-13-2.png',
        original: '/assets/images/products/p-13-2.png',
      },
    ],
    price: 23.0,
    sale_price: 13.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 9,
    name: 'Zara Shoes Green',
    description:
      'Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.',
    slug: 'zara-shoes-green',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-19.png',
      original: '/assets/images/products/p-19-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-19-1.png',
        original: '/assets/images/products/p-19-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-19-2.png',
        original: '/assets/images/products/p-19-2.png',
      },
      {
        id: 3,
        thumbnail: '/assets/images/products/p-19-3.png',
        original: '/assets/images/products/p-19-3.png',
      },
      {
        id: 4,
        thumbnail: '/assets/images/products/p-19-4.png',
        original: '/assets/images/products/p-19-4.png',
      },
    ],
    price: 300.0,
    sale_price: 250.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
  {
    id: 10,
    name: 'Maniac Red Boys',
    description:
      'Sporty essentials, these Under Armour athletic shorts are smooth and lightweight in moisture-wicking material.',
    slug: 'maniac-red-boys',
    image: {
      id: 1,
      thumbnail: '/assets/images/products/p-20.png',
      original: '/assets/images/products/p-20-m.png',
    },
    gallery: [
      {
        id: 1,
        thumbnail: '/assets/images/products/p-20-1.png',
        original: '/assets/images/products/p-20-1.png',
      },
      {
        id: 2,
        thumbnail: '/assets/images/products/p-20-2.png',
        original: '/assets/images/products/p-20-2.png',
      },
    ],
    price: 20.0,
    sale_price: 15.0,
    variations: [
      {
        id: 1,
        value: 'S',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 2,
        value: 'M',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 3,
        value: 'L',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 4,
        value: 'XL',
        attribute: {
          id: 1,
          name: 'Size',
          slug: 'size',
        },
      },
      {
        id: 5,
        value: 'Orange',
        meta: '#e86c25',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 6,
        value: 'Pink',
        meta: '#ffa5b4',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 7,
        value: 'Purple',
        meta: '#8224e3',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
      {
        id: 8,
        value: 'Red',
        meta: '#dd3333',
        attribute: {
          id: 1,
          name: 'Color',
          slug: 'color',
        },
      },
    ],
  },
];

export const brands = {
  brands: [
    {
      id: 1,
      name: 'Shovia',
      slug: 'shovia',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/shovia.png',
        original: '/assets/images/brands/shovia.png',
      },
    },
    {
      id: 2,
      name: 'Fusion',
      slug: 'fusion',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/fusion.png',
        original: '/assets/images/brands/fusion.png',
      },
    },
    {
      id: 3,
      name: 'Hunter Shoes',
      slug: 'hunter-shoes',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/hunter-shoes.png',
        original: '/assets/images/brands/hunter-shoes.png',
      },
    },
    {
      id: 4,
      name: 'Club Shoes',
      slug: 'club-shoes',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/club-shoes.png',
        original: '/assets/images/brands/club-shoes.png',
      },
    },
    {
      id: 5,
      name: 'Hoppister',
      slug: 'hoppister',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/hoppister.png',
        original: '/assets/images/brands/hoppister.png',
      },
    },
    {
      id: 6,
      name: 'Blaze Fashion',
      slug: 'blaze-fashion',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/blaze-fashion.png',
        original: '/assets/images/brands/blaze-fashion.png',
      },
    },
    {
      id: 7,
      name: 'Elegance',
      slug: 'elegance',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/elegance.png',
        original: '/assets/images/brands/elegance.png',
      },
    },
    {
      id: 8,
      name: 'Fashadil',
      slug: 'fashadil',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/fashadil.png',
        original: '/assets/images/brands/fashadil.png',
      },
    },
  ],
  brandsGrid: [
    {
      id: 1,
      name: 'Fusion',
      slug: 'fusion',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/fusion.png',
        original: '/assets/images/brands/grid/fusion.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/fusion-bg.jpg',
        original: '/assets/images/brands/grid/fusion-bg.jpg',
      },
    },
    {
      id: 2,
      name: 'Sholy',
      slug: 'sholy',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/sholy.png',
        original: '/assets/images/brands/grid/sholy.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/sholy-bg.jpg',
        original: '/assets/images/brands/grid/sholy-bg.jpg',
      },
    },
    {
      id: 3,
      name: 'Tyrant',
      slug: 'tyrant',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/tyrant.png',
        original: '/assets/images/brands/grid/tyrant.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/tyrant-bg.jpg',
        original: '/assets/images/brands/grid/tyrant-bg.jpg',
      },
    },
    {
      id: 4,
      name: 'Fashadil',
      slug: 'fashadil',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/fashadil.png',
        original: '/assets/images/brands/grid/fashadil.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/fashadil-bg.jpg',
        original: '/assets/images/brands/grid/fashadil-bg.jpg',
      },
    },
    {
      id: 5,
      name: 'Clothingegy',
      slug: 'clothingegy',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/clothingegy.png',
        original: '/assets/images/brands/grid/clothingegy.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/clothingegy-bg.jpg',
        original: '/assets/images/brands/grid/clothingegy-bg.jpg',
      },
    },
    {
      id: 6,
      name: 'Shosio',
      slug: 'shosio',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/shosio.png',
        original: '/assets/images/brands/grid/shosio.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/shosio-bg.jpg',
        original: '/assets/images/brands/grid/shosio-bg.jpg',
      },
    },
    {
      id: 7,
      name: 'Club Shoes',
      slug: 'club-shoes',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/club-shoes.png',
        original: '/assets/images/brands/grid/club-shoes.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/club-shoes-bg.jpg',
        original: '/assets/images/brands/grid/club-shoes-bg.jpg',
      },
    },
    {
      id: 8,
      name: 'Pop Clothing',
      slug: 'pop-clothing',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/pop-clothing.png',
        original: '/assets/images/brands/grid/pop-clothing.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/pop-clothing-bg.jpg',
        original: '/assets/images/brands/grid/pop-clothing-bg.jpg',
      },
    },
    {
      id: 9,
      name: 'Hoppister',
      slug: 'hoppister',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/hoppister.png',
        original: '/assets/images/brands/grid/hoppister.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/hoppister-bg.jpg',
        original: '/assets/images/brands/grid/hoppister-bg.jpg',
      },
    },
    {
      id: 10,
      name: 'Shovia',
      slug: 'shovia',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/shovia.png',
        original: '/assets/images/brands/grid/shovia.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/shovia-bg.jpg',
        original: '/assets/images/brands/grid/shovia-bg.jpg',
      },
    },
    {
      id: 11,
      name: 'Shoozly',
      slug: 'shoozly',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/shoozly.png',
        original: '/assets/images/brands/grid/shoozly.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/shoozly-bg.jpg',
        original: '/assets/images/brands/grid/shoozly-bg.jpg',
      },
    },
    {
      id: 12,
      name: 'Blaze Fashion',
      slug: 'blaze-fashion',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/blaze-fashion.png',
        original: '/assets/images/brands/grid/blaze-fashion.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/blaze-fashion-bg.jpg',
        original: '/assets/images/brands/grid/blaze-fashion-bg.jpg',
      },
    },
    {
      id: 13,
      name: 'Elegance',
      slug: 'elegance',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/elegance.png',
        original: '/assets/images/brands/grid/elegance.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/elegance-bg.jpg',
        original: '/assets/images/brands/grid/elegance-bg.jpg',
      },
    },
    {
      id: 14,
      name: 'Clothingtastic',
      slug: 'clothingtastic',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/clothingtastic.png',
        original: '/assets/images/brands/grid/clothingtastic.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/clothingtastic-bg.jpg',
        original: '/assets/images/brands/grid/clothingtastic-bg.jpg',
      },
    },
    {
      id: 15,
      name: 'Fashnetic',
      slug: 'fashnetic',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/fashnetic.png',
        original: '/assets/images/brands/grid/fashnetic.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/fashnetic-bg.jpg',
        original: '/assets/images/brands/grid/fashnetic-bg.jpg',
      },
    },
    {
      id: 16,
      name: 'Hunter Shoes',
      slug: 'hunter-shoes',
      image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/hunter-shoes.png',
        original: '/assets/images/brands/grid/hunter-shoes.png',
      },
      background_image: {
        id: 1,
        thumbnail: '/assets/images/brands/grid/hunter-shoes-bg.jpg',
        original: '/assets/images/brands/grid/hunter-shoes-bg.jpg',
      },
    },
  ],
};
