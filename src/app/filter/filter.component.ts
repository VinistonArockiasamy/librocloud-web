import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FilterServiceToken,
  IFilterService,
} from '@core/services/filter/filter-i.service';
import { IAuthor } from '@models/responses';
import { FilterUpdateService } from '@shared/services';
import { AppContext } from '../app.context';
import { BookServiceToken, IBookService } from '@core/services/book/book-i.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  public genres: Array<any> = [];
  public authors: Array<any> = [];
  public searchText = '';
  public title: string = '';
  public author: string = '';

  public isFiltered = false;
  public filterForm: FormGroup = {} as any;
  private subscribeInitialData: any;
  public isDisabled = false;

  constructor(
    @Inject(FilterServiceToken)
    private _filterService: IFilterService,
    private readonly filterUpdateService: FilterUpdateService,
    public appContext: AppContext,
    @Inject(BookServiceToken)
    private _bookService: IBookService,
    private readonly snackBar: MatSnackBar,
  ) {}

  public ngOnInit(): void {
    this.filterForm = new FormGroup({
      title: new FormControl('', [Validators.minLength(3)]),
      authors: new FormControl(''),
      genres: new FormControl(''),
    });
    this.loadAuthors();
    this.loadGenres();
  }

  public clearAllAuthorSelection(): void {
    this.authors.forEach((type) => {
      type.isSelected = false;
    });
  }

  public clearAllGenreSelection(): void {
    this.genres.forEach((type) => {
      type.isSelected = false;
    });
  }

  public filter(): void {
    this.applyFilter(true);
  }

  public reset(): void {
    this.isFiltered = false;
    if (this.genres.length !== 1) {
      this.genres.forEach((type) => {
        type.isSelected = false;
      });
    }
    this.clearAllAuthorSelection();
    this.clearAllGenreSelection();
    this.title = '';
    this.searchText = '';
    this.applyFilter(false);
  }

  public dumpBook(): void {
    this._bookService.dumpBook().subscribe({
      next: (response: string) => {
        this.openSnackBar(response, 'e-success');
      },
    });
  }

  private loadAuthors(): void {
    this._filterService.authors().subscribe({
      next: (response: IAuthor[]) => {
        this.authors = response;
      },
    });
  }

  private loadGenres(): void {
    this._filterService.genres().subscribe({
      next: (response: string[]) => {
        this.genres = response.map((category) => ({
          name: category,
          isSelected: false,
        }));
      },
    });
  }

  private setFilterAuthors(): void {
    this.appContext.filterContext.filter.authorId = this.authors
      .filter((author) => author.isSelected)
      .map((author) => author.id);
  }

  private setFilterGenres(): void {
    this.appContext.filterContext.filter.bookGenre = this.genres
      .filter((genre) => genre.isSelected)
      .map((genre) => genre.name);
  }

  public applyFilter(resetStatus: boolean): void {
    this.isFiltered = true;
    if (this.filterForm.invalid) {
      return;
    }
    this.appContext.filterContext.filter.bookTitle = this.title;
    this.setFilterAuthors();
    this.setFilterGenres();
    this.filterUpdateService.updateFilter(resetStatus);
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
    if (this.subscribeInitialData) {
      this.subscribeInitialData.unsubscribe();
    }
  }
}
