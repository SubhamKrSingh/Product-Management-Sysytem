export class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string; // Make imageUrl optional
  category?: string;
}