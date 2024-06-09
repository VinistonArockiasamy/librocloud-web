import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseClientProxy } from '../../rest-proxies/base.clientproxy';
import { environment } from '@environments/environment';
import { ISubscriptionService } from './subscription-i.service';
import { SubscribeBookRequest } from '@models/requests/subscribe-book.request';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService extends BaseClientProxy implements ISubscriptionService {
  constructor(http: HttpClient) {
    super(http);
  }
  subscribe(userId: string, request: SubscribeBookRequest): Observable<any> {
    return this.basePost(`${environment.subscriptionApiUrl}/api/subscriptions/${userId}/subscribe`, request);
  }
  unsubscribe(userId: string, request: SubscribeBookRequest): Observable<any> {
    return this.basePost(`${environment.subscriptionApiUrl}/api/subscriptions/${userId}/unsubscribe`, request);
  }
  subscribedBooks(userId: string): Observable<string[]> {
    return this.baseGet(`${environment.subscriptionApiUrl}/api/subscriptions/${userId}/subscriptions`);
  }
}
