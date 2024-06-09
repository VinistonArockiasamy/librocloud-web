import { InjectionToken } from '@angular/core';
import { BookFilterRequest } from '@models/requests/book-filter.request';
import { SubscribeBookRequest } from '@models/requests/subscribe-book.request';
import { IBookResultPage } from '@models/responses/book-result-page';
import { Observable } from 'rxjs';
import { IAuthor } from 'src/app/models';

export const SubscriptionServiceToken = new InjectionToken<ISubscriptionService>(
  'SubscriptionServiceToken'
);

export interface ISubscriptionService {
  subscribe(userId: string, request: SubscribeBookRequest): Observable<any>;
  unsubscribe(userId: string, request: SubscribeBookRequest): Observable<any>;
  subscribedBooks(userId: string): Observable<string[]>;
}
