import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBookService } from './book-i.service';
import { SubscribeBookRequest } from '@models/requests/subscribe-book.request';

@Injectable({
  providedIn: 'root',
})
export class BookMockService implements IBookService {
  constructor() {}

  dumpBook(): Observable<any> {
    return of();
  }
}
