import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFilterService } from './filter-i.service';
import { BookFilterRequest } from '@models/requests/book-filter.request';
import { IAuthor } from '@models/responses';
import { IBookResultPage } from '@models/responses/book-result-page';

@Injectable({
  providedIn: 'root',
})
export class FilterMockService implements IFilterService {
  constructor() {}
  authors(): Observable<Array<IAuthor>> {
    return of([
      {
        id: '6559c50d476a6df0e3d7173b',
        name: 'Abbigail Fritsch',
        bio: 'Est voluptas omnis quam quia quasi.',
      },
    ]);
  }
  genres(): Observable<string[]> {
    return of(['Automotive', 'Baby', 'Beauty', 'Books']);
  }
  filterBooks(filter: BookFilterRequest): Observable<IBookResultPage> {
    return of({
      totalResults: 2,
      pageNumber: 0,
      totalPages: 1,
      results: [
        {
          id: '6559c50a476a6df0e3d716c4',
          title: 'Unbranded Wooden Towels',
          isbn: '2lyhdmy7le',
          authorId: '6559c50a476a6df0e3d716c2',
          authorName: 'Ryan Ward',
          genre: 'Sports',
          publicationDate: '2020-06-29T23:51:28.386Z',
          price: 48.08,
          quantityAvailable: 5,
          description: 'Nisi quia ipsum ad et veniam rerum.',
          isActive: true
        }
      ],
    });
  }
}
