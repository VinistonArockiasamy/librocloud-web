import { IBook } from './book';

export interface IBookResultPage {
  totalResults: number;
  pageNumber: number;
  totalPages: number;
  results: Array<IBook>;
}
