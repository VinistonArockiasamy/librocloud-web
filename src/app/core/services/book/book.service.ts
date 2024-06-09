import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseClientProxy } from '../../rest-proxies/base.clientproxy';
import { environment } from '@environments/environment';
import { IBookService } from './book-i.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseClientProxy implements IBookService {
  constructor(http: HttpClient) {
    super(http);
  }
  dumpBook(): Observable<any> {
    return this.basePost(`${environment.subscriptionApiUrl}/api/books/dump`, '');
  }
}
