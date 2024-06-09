import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IBook } from '../models/responses/book';
import { AppContext } from '../app.context';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FilterServiceToken,
  IFilterService,
} from '@core/services/filter/filter-i.service';
import {
  ISubscriptionService,
  SubscriptionServiceToken,
} from '@core/services/subscription/subscription-i.service';
import { IBookResultPage } from '@models/responses/book-result-page';

@Component({
  selector: 'app-subscription-grid',
  templateUrl: './subscription-grid.component.html',
  styleUrls: ['./subscription-grid.component.scss'],
})
export class SubscriptionGridComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: true }) public sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  public paginator!: MatPaginator;
  @Input() public tableColumns!: Array<any>;
  public columnsToDisplay!: Array<string>;
  public dataSource = new MatTableDataSource<IBook>();
  public pageSize!: number;
  public pageEvent!: PageEvent;
  public subscription!: Subscription;
  public isFilterApplied: boolean;
  public isLoading = true;
  public isAllSelected = false;
  public isShowDelete = false;
  public hasFullAccess!: boolean;
  public subscribedBooks: string[] = [];

  constructor(
    public appContext: AppContext,
    private readonly snackBar: MatSnackBar,
    @Inject(FilterServiceToken)
    private _filterService: IFilterService,
    @Inject(SubscriptionServiceToken)
    private _subscriptionService: ISubscriptionService
  ) {
    this.appContext.filterContext.filter.pageNumber = 1;
    this.isFilterApplied = false;
  }

  public ngOnInit(): void {
    this.pageSize = 20;
    this.getSubscribedBooks();
    this.columnsToDisplay = this.tableColumns.map((table) => table.columnDef);
  }

  public ngAfterViewInit() {
    this.paginator.pageIndex = 0;
  }

  public getSubscribedBooks(): void {
    this.isLoading = true;
    this.isShowDelete = false;
    this.isAllSelected = false;
    this._subscriptionService
      .subscribedBooks(this.appContext.config.id)
      .subscribe({
        next: (bookIds: string[]) => {
          if (bookIds.length > 0) {
            this.subscribedBooks = bookIds;
          } else {
            this.subscribedBooks = ['61a16eefdd5a7516942ab71b']; //set dummy Id
          }
          this.getBooks();
        },
      });
    this.paginator.length = 1;
  }

  public getBooks(): void {
    let request = this.appContext.filterContext.filter;
    request.bookId = this.subscribedBooks;
    request.bookGenre = [];
    this._filterService
      .filterBooks(this.appContext.filterContext.filter)
      .subscribe({
        next: (response: IBookResultPage) => {
          this.isLoading = false;
          this.dataSource.data = response.results;
          this.dataSource.data.forEach((book) => (book.isSelected = false));
          this.paginator.length = response.totalResults;
        },
      });
    this.paginator.length = 1;
  }

  public pageHasChanged(event: PageEvent): void {
    this.appContext.filterContext.filter.pageNumber = event.pageIndex + 1;
    this.appContext.filterContext.filter.pageSize = event.pageSize || 20;
    this.getBooks();
  }

  public sortData(sort: Sort) {
    this.appContext.filterContext.filter.sortBy = sort.active;
    this.appContext.filterContext.filter.sortOrder = sort.direction;
    this.getBooks();
  }

  public selectAllBooks(): void {
    this.isShowDelete = this.isAllSelected;
    this.dataSource.data.forEach(
      (notifications: IBook) => (notifications.isSelected = this.isAllSelected)
    );
  }

  public selectBook(): void {
    if (this.dataSource.data.find((data) => data.isSelected)) {
      this.isShowDelete = true;
    } else {
      this.isShowDelete = false;
    }
    if (this.dataSource.data.every((data) => data.isSelected === true)) {
      this.isAllSelected = true;
      this.isShowDelete = this.isAllSelected;
    } else {
      this.isAllSelected = false;
    }
  }

  public unsubscribeBooks(): void {
    const unsubscribeBookRequest: any = {
      bookIds: [],
    };
    this.dataSource.data.forEach((data) => {
      if (data.isSelected) {
        unsubscribeBookRequest.bookIds.push(data.id);
      }
    });
    this._subscriptionService
      .unsubscribe(this.appContext.config.id, unsubscribeBookRequest)
      .subscribe({
        next: (response: any) => {
          this.openSnackBar('Selected books unsubscribed', 'e-success');
          this.getSubscribedBooks();
        },
      });
  }

  public openSnackBar(message: string, snackBarClass: string): void {
    this.snackBar.open(message, 'Ok', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: [snackBarClass],
    });
  }
}
