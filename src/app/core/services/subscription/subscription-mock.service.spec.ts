import { TestBed, inject } from '@angular/core/testing';

import { SubscriptionMockService } from './subscription-mock.service';

describe('SubscriptionMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionMockService]
    });
  });

  it('should be created', inject([SubscriptionMockService], (service: SubscriptionMockService) => {
    expect(service).toBeTruthy();
  }));
});
