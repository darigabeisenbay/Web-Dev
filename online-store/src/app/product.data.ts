import { Category } from './models/category.model';
import { Product } from './models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const PRODUCTS: Product[] = [
  // Категория 1: Smartphones
  {
    id: 1, categoryId: 1, name: 'iPhone 15', price: 345000, likes: 0, rating: 4.9,
    description: 'Latest Apple smartphone with Dynamic Island.', 
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 
    images: ['https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 'img2', 'img3']
  },
  {
    id: 2, categoryId: 1, name: 'Samsung Galaxy S24', price: 450000, likes: 0, rating: 4.8,
    description: 'Flagship with Galaxy AI features.', 
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-128gb-chernyi-116121448/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1a/84963577364510.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 3, categoryId: 1, name: 'Xiaomi 13T', price: 230000, likes: 0, rating: 4.7,
    description: 'Excellent Leica camera system.', 
    link: 'https://kaspi.kz/shop/p/xiaomi-13t-12-256gb-chernyi-113543948/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h09/83559338573854.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 4, categoryId: 1, name: 'Google Pixel 8', price: 380000, likes: 0, rating: 4.6,
    description: 'Pure Android and great photography.', 
    link: 'https://kaspi.kz/shop/p/google-pixel-8-8-128gb-chernyi-113945413/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1a/84963577364510.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 5, categoryId: 1, name: 'Nothing Phone (2)', price: 290000, likes: 0, rating: 4.9,
    description: 'Unique Glyph interface design.', 
    link: 'https://kaspi.kz/shop/p/nothing-phone-2-12-256gb-seryi-111862148/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 
    images: ['img1', 'img2', 'img3']
  },

  // Категория 2: Laptops
  {
    id: 6, categoryId: 2, name: 'MacBook Air M2', price: 560000, likes: 0, rating: 5.0,
    description: 'Slim and powerful with M2 chip.', 
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-105952188/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1a/84963577364510.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 7, categoryId: 2, name: 'ASUS ROG Strix', price: 780000, likes: 0, rating: 4.8,
    description: 'High-performance gaming laptop.', 
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-512-gb-no-os-g614ju-n3163-110416434/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h09/83559338573854.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 8, categoryId: 2, name: 'Lenovo Legion 5', price: 650000, likes: 0, rating: 4.7,
    description: 'Perfect balance for work and play.', 
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-15ach6h-15-6-16-gb-ssd-512-gb-no-os-82ju000xrk-102161271/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 9, categoryId: 2, name: 'HP Victus 15', price: 420000, likes: 0, rating: 4.5,
    description: 'Affordable gaming for everyone.', 
    link: 'https://kaspi.kz/shop/p/hp-victus-15-fa0031ua-15-6-8-gb-ssd-512-gb-no-os-725y4ea-110052562/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1a/84963577364510.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 10, categoryId: 2, name: 'Acer Swift 3', price: 350000, likes: 0, rating: 4.6,
    description: 'Lightweight metal ultrabook.', 
    link: 'https://kaspi.kz/shop/p/acer-swift-3-sf314-43-14-8-gb-ssd-512-gb-no-os-nx-ab1er-00m-105574044/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h09/83559338573854.jpg', 
    images: ['img1', 'img2', 'img3']
  },

  // Категория 3: Headphones
  {
    id: 11, categoryId: 3, name: 'AirPods Pro 2', price: 115000, likes: 0, rating: 4.9,
    description: 'Active Noise Cancellation and transparency mode.', 
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-usb-c-magsafe-case-belyi-113370341/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 12, categoryId: 3, name: 'Sony WH-1000XM5', price: 180000, likes: 0, rating: 4.8,
    description: 'Industry leading noise canceling.', 
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221416/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1a/84963577364510.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 13, categoryId: 3, name: 'Galaxy Buds 2 Pro', price: 75000, likes: 0, rating: 4.7,
    description: 'Ultimate 24-bit Hi-Fi sound.', 
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzakcis-chernyi-106128596/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h09/83559338573854.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 14, categoryId: 3, name: 'Marshall Major IV', price: 65000, likes: 0, rating: 4.9,
    description: 'Classic design with 80+ hours of battery.', 
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-100463133/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 15, categoryId: 3, name: 'JBL Tune 510BT', price: 25000, likes: 0, rating: 4.6,
    description: 'Pure Bass sound for daily use.', 
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101402280/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1a/84963577364510.jpg', 
    images: ['img1', 'img2', 'img3']
  },

  // Категория 4: Tablets
  {
    id: 16, categoryId: 4, name: 'iPad Air 2022', price: 320000, likes: 0, rating: 5.0,
    description: 'Supercharged by the Apple M1 chip.', 
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-8-gb-64-gb-seryi-104235282/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h09/83559338573854.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 17, categoryId: 4, name: 'Galaxy Tab S9', price: 410000, likes: 0, rating: 4.8,
    description: 'Dynamic AMOLED 2X and S Pen included.', 
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-wi-fi-8-128gb-chernyi-112393306/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 18, categoryId: 4, name: 'Xiaomi Pad 6', price: 165000, likes: 0, rating: 4.9,
    description: 'Powerful WQHD+ 144Hz display.', 
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-256gb-seryi-111166345/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1a/84963577364510.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 19, categoryId: 4, name: 'Huawei MatePad 11', price: 145000, likes: 0, rating: 4.7,
    description: 'Smooth performance for study and work.', 
    link: 'https://kaspi.kz/shop/p/huawei-matepad-11-2023-8-128gb-chernyi-110291931/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h09/83559338573854.jpg', 
    images: ['img1', 'img2', 'img3']
  },
  {
    id: 20, categoryId: 4, name: 'Lenovo Tab P11', price: 120000, likes: 0, rating: 4.6,
    description: 'Great for family entertainment.', 
    link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-gen-2-6-128gb-seryi-110052562/',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.jpg', 
    images: ['img1', 'img2', 'img3']
  }
];