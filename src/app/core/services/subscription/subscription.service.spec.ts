import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionService],
      imports: [
        HttpClientTestingModule
    ],
    });
  });

  it('should be created', async(inject([HttpTestingController, SubscriptionService],
    (httpClient: HttpTestingController, apiService: SubscriptionService) => {
      expect(apiService).toBeTruthy();
  })));
});
