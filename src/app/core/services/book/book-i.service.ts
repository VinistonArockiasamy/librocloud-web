import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const BookServiceToken = new InjectionToken<IBookService>(
  'BookServiceToken'
);

export interface IBookService {
  dumpBook(): Observable<any>;
}
