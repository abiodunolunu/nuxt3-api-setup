import type { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  price: string;
  category: Category;
  description: string;
  image: string;
}
