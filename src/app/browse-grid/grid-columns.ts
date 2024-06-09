import { IBook } from "../models/responses/book";
import { Utility } from "../shared/utility";

export const gridColumns: Array<any> = [
  {
    columnDef: 'select',
    header: '',
    cell: (row: IBook) => `${row.isSelected}`
  },
  {
    columnDef: 'title',
    header: 'Title',
    cell: (row: IBook) => `${row.title}`
  },
  {
    columnDef: 'datePublished',
    header: 'Date Published',
    cell: (row: IBook) =>
      `${row.publicationDate ? Utility.getFormattedDate(row.publicationDate) : 'NA'}`
  },
  {
    columnDef: 'genre',
    header: 'Genre',
    cell: (row: IBook) => `${row.genre}`
  },
  {
    columnDef: 'author',
    header: 'Author',
    cell: (row: IBook) => `${row.authorName}`
  }
];
