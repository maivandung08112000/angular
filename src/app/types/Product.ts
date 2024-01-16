import { Category } from './Category';

export type Product = {
  id: number; // Omit loai bo
  title: string;
  price: number;
  image: string;
  description: string;
  category: string; // Omit loai bo
  rating: {
    rate: number;
    count: number;
  };
};
export type CreateProductForm = Omit<Product, 'id' | 'rating'>;
