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

export type ProductAdmin = Omit<Product, 'id' | 'category'> & {
  rate: number;
};

export type ApiProduct = Omit<Product, 'id' | 'rating'> & {
  _id: string;
  category: Category;
  rate: number;
};
