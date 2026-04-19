export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  images: string[];
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'women', name: 'Women' },
  { id: 'men', name: 'Men' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'bags', name: 'Bags' },
  { id: 'accessories', name: 'Accessories' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 17 Pro Max (256GB / 512GB / 1TB / 2TB) - 5G',
    category: 'Smartphones',
    price: 2299000,
    rating: 4.8,
    images: [
      '/product-images/product1/iphone17pro-1_3.png',
      '/product-images/product1/iphone17pro-2_1.png',
      '/product-images/product1/iphone17pro-3_1.png',
      '/product-images/product1/iphone17pro-4_1.png',
      '/product-images/product1/iphone17pro-6.png',
    ],
    badge: 'New',
  },
  {
    id: '2',
    name: 'Beats by Dr. Dre - Powerbeats Pro 2 True Wireless Active Noise Canceling Earbuds',
    category: 'Audio',
    price: 380000,
    rating: 4.9,
    images: [
      '/product-images/product2/powerbeatspro2-1.png',
      '/product-images/product2/powerbeatspro2-2.png',
      '/product-images/product2/powerbeatspro2-3.png',
      '/product-images/product2/powerbeatspro2-4.png',
      '/product-images/product2/powerbeatspro2-5.png',
      '/product-images/product2/powerbeatspro2-6.png',
    ],
  },
  {
    id: '3',
    name: 'Sony PlayStation 5 Slim (PS5 Slim) Console',
    category: 'Gaming',
    price: 899000,
    rating: 4.7,
    images: [
      '/product-images/product3/ps5slim-1.jpeg',
      '/product-images/product3/ps5slim-2.jpeg',
      '/product-images/product3/ps5slim-3.jpeg',
    ],
  },
  {
    id: '4',
    name: 'Apple iPhone 17 (256GB / 512GB) - 5G',
    category: 'Smartphones',
    price: 1499000,
    rating: 4.6,
    images: [
      '/product-images/product4/iphone17-1.png',
      '/product-images/product4/iphone17-2.png',
      '/product-images/product4/iphone17-3.png',
      '/product-images/product4/iphone17-4.png',
      '/product-images/product4/iphone17-5.png',
    ],
    badge: 'Sale',
  },
  {
    id: '5',
    name: 'JBL Boombox 4 Portable Bluetooth Speaker',
    category: 'Audio',
    price: 850000,
    rating: 4.5,
    images: [
      '/product-images/product5/jblboombox4-1.png',
      '/product-images/product5/jblboombox4-2.png',
      '/product-images/product5/jblboombox4-3.png',
      '/product-images/product5/jblboombox4-4.png',
      '/product-images/product5/jblboombox4-5.png',
      '/product-images/product5/jblboombox4-6.png',
      '/product-images/product5/jblboombox4-7.png',
    ],
  },
  {
    id: '6',
    name: 'Samsung Galaxy Fold 6 Dual SIM - 12GB, 256GB - 5G',
    category: 'Smartphones',
    price: 1799000,
    rating: 4.8,
    images: [
      '/product-images/product6/samsungfold6-1.jpg',
      '/product-images/product6/samsungfold6-2.jpg',
      '/product-images/product6/samsungfold6-3.jpg',
      '/product-images/product6/samsungfold6-4.jpg',
    ],
  },
  {
    id: '7',
    name: 'Google Pixel 9 Pro XL (128GB / 256GB / 512GB / 1TB) - 5G',
    category: 'Smartphones',
    price: 1499000,
    rating: 4.9,
    images: [
      '/product-images/product7/pixel9pro-1_4.png',
      '/product-images/product7/pixel9pro-2_1.png',
      '/product-images/product7/pixel9pro-3_1.png',
      '/product-images/product7/pixel9pro-4_1.png',
      '/product-images/product7/pixel9pro-5_1.png',
      '/product-images/product7/pixel9pro-6_1.png',
    ],
    badge: 'New',
  },
  {
    id: '8',
    name: 'Apple Macbook Air 13" M4 Chip (16GB RAM - 256GB, 512GB) - 2025 Model',
    category: 'Laptops',
    price: 1599000,
    rating: 4.4,
    images: [
      '/product-images/product8/macbookairm4-1_4.png',
      '/product-images/product8/macbookairm4-2.png',
      '/product-images/product8/macbookairm4-3.png',
      '/product-images/product8/macbookairm4-4.png',
      '/product-images/product8/macbookairm4-5.png',
    ],
  },
];

export const promotionalBanners = [
  {
    id: '1',
    title: 'Summer Collection',
    subtitle: 'Up to 50% Off',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
    cta: 'Shop Now',
    size: 'large',
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Fresh Styles',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    cta: 'Discover',
    size: 'small',
  },
  {
    id: '3',
    title: 'Accessories',
    subtitle: 'Complete Your Look',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop',
    cta: 'View All',
    size: 'small',
  },
  {
    id: '4',
    title: 'Premium Quality',
    subtitle: 'Handcrafted Excellence',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
    cta: 'Learn More',
    size: 'wide',
  },
];
