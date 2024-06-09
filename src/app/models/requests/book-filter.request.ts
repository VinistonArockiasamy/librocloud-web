export class BookFilterRequest {
  public bookTitle?: string;
  public authorId?: string[];
  public bookGenre?: string[];
  public bookId?: string[];
  public sortBy?: string;
  public sortOrder?: string;
  public pageNumber?: number;
  public pageSize?: number;
}
