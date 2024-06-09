import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnDestroy,
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
import { SubscribeBookRequest } from '../models/requests/subscribe-book.request';
import {
  FilterServiceToken,
  IFilterService,
} from '@core/services/filter/filter-i.service';
import { IBookResultPage } from '@models/responses/book-result-page';
import { FilterUpdateService } from '@shared/services';
import {
  ISubscriptionService,
  SubscriptionServiceToken,
} from '@core/services/subscription/subscription-i.service';

@Component({
  selector: 'app-browse-grid',
  templateUrl: './browse-grid.component.html',
  styleUrls: ['./browse-grid.component.scss'],
})
export class BrowseGridComponent implements OnInit, OnDestroy, AfterViewInit {
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

  constructor(
    public appContext: AppContext,
    private readonly snackBar: MatSnackBar,
    @Inject(FilterServiceToken)
    private _filterService: IFilterService,
    private readonly filterUpdateService: FilterUpdateService,
    @Inject(SubscriptionServiceToken)
    private _subscriptionService: ISubscriptionService
  ) {
    this.appContext.filterContext.filter.pageNumber = 1;
    this.appContext.filterContext.filter.bookId = [];
    this.isFilterApplied = false;
    this.subscription = this.filterUpdateService
      .getFilter()
      .subscribe((filterResponse) => {
        this.appContext.filterContext.filter.pageNumber = 1;
        this.paginator.pageIndex = 0;
        this.isFilterApplied = filterResponse.status;
        this.getBooks();
      });
  }

  public ngOnInit(): void {
    this.pageSize = 20;
    this.getBooks();
    this.columnsToDisplay = this.tableColumns.map((table) => table.columnDef);
  }

  public ngAfterViewInit() {
    this.paginator.pageIndex = 0;
  }

  public getBooks(): void {
    this.isLoading = true;
    this.isShowDelete = false;
    this.isAllSelected = false;
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

  public subscribeBooks(): void {
    const subscribeBookRequest: any = {
      bookIds: [],
    };
    this.dataSource.data.forEach((data) => {
      if (data.isSelected) {
        subscribeBookRequest.bookIds.push(data.id);
      }
    });
    this._subscriptionService
      .subscribe(this.appContext.config.id, subscribeBookRequest)
      .subscribe({
        next: (response: any) => {
          this.openSnackBar('Subscribed to selected books', 'e-success');
          this.getBooks();
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

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
