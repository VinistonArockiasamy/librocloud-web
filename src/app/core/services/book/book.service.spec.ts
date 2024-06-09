import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [
        HttpClientTestingModule
    ],
    });
  });

  it('should be created', async(inject([HttpTestingController, BookService],
    (httpClient: HttpTestingController, apiService: BookService) => {
      expect(apiService).toBeTruthy();
  })));
});
