import { InjectionToken } from '@angular/core';
import { BookFilterRequest } from '@models/requests/book-filter.request';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/models';
import { IBookResultPage } from 'src/app/models/responses/book-result-page';

export const FilterServiceToken = new InjectionToken<IFilterService>(
  'FilterServiceToken'
);

export interface IFilterService {
  authors(): Observable<Array<IAuthor>>;
  genres(): Observable<string[]>;
  filterBooks(filter: BookFilterRequest): Observable<IBookResultPage>;
}
