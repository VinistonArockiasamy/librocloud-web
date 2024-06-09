export interface IBook {
  id: string;
  title: string;
  isbn?: string;
  authorId?: string;
  authorName?: string;
  genre: string;
  publicationDate: string;
  price?: number;
  quantityAvailable?: number;
  description?: string;
  isActive?: boolean;
  isSelected?: boolean;
}