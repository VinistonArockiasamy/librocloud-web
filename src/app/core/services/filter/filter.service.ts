import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseClientProxy } from '../../rest-proxies/base.clientproxy';
import { IAuthor } from '@models/responses';
import { environment } from '@environments/environment';
import { IBookResultPage } from '@models/responses/book-result-page';
import { BookFilterRequest } from '@models/requests/book-filter.request';
import { IFilterService } from './filter-i.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService extends BaseClientProxy implements IFilterService {
  constructor(http: HttpClient) {
    super(http);
  }
  authors(): Observable<Array<IAuthor>>{
    return this.baseGet(`${environment.bookApiUrl}/api/Filters/authors`);
  }
  genres(): Observable<string[]>{
    return this.baseGet(`${environment.bookApiUrl}/api/Filters/genres`);
  }
  filterBooks(filter: BookFilterRequest): Observable<IBookResultPage>{
    return this.basePost(`${environment.bookApiUrl}/api/Filters`, filter);
  }
}
