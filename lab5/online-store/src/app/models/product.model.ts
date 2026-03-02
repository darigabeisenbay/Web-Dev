export interface Product {
  id: number;
  categoryId: number; // Этого поля у тебя не хватает
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
  likes: number;      // И этого тоже
}