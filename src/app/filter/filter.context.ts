import { Injectable } from '@angular/core';
import { BookFilterRequest } from '../models/requests/book-filter.request';

@Injectable({
  providedIn: 'root'
})
export class FilterContext {
  public filter!: BookFilterRequest;
}
