import { TestBed, inject } from '@angular/core/testing';

import { BookMockService } from './book-mock.service';

describe('BookMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookMockService]
    });
  });

  it('should be created', inject([BookMockService], (service: BookMockService) => {
    expect(service).toBeTruthy();
  }));
});
