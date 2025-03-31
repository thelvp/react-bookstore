export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishingDate: string;
  price: number;
  stock: number;
  description?: string;
  coverImageUrl?: string;
}
