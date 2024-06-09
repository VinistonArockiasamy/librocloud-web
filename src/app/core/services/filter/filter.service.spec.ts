import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService],
      imports: [
        HttpClientTestingModule
    ],
    });
  });

  it('should be created', async(inject([HttpTestingController, FilterService],
    (httpClient: HttpTestingController, apiService: FilterService) => {
      expect(apiService).toBeTruthy();
  })));
});
