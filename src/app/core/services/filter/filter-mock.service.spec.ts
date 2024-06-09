import { TestBed, inject } from '@angular/core/testing';

import { FilterMockService } from './filter-mock.service';

describe('FilterMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterMockService]
    });
  });

  it('should be created', inject([FilterMockService], (service: FilterMockService) => {
    expect(service).toBeTruthy();
  }));
});
