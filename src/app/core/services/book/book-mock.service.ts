import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBookService } from './book-i.service';

@Injectable({
  providedIn: 'root',
})
export class BookMockService implements IBookService {
  constructor() {}

  dumpBook(): Observable<any> {
    return of({ status: 'Mock response: Book dumped successfully' });
  }
}
