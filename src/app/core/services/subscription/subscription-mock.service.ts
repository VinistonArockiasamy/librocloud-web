import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISubscriptionService } from './subscription-i.service';
import { SubscribeBookRequest } from '@models/requests/subscribe-book.request';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionMockService implements ISubscriptionService {
  constructor() {}
  subscribe(userId: string, request: SubscribeBookRequest): Observable<any> {
    return of();
  }
  unsubscribe(userId: string, request: SubscribeBookRequest): Observable<any> {
    return of();
  }
  subscribedBooks(userId: string): Observable<string[]> {
    return of(["hdhdkddhdkdhd", "fmfmkddhdkdfm"]);
  }
}
