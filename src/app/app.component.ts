import { Component, ElementRef } from '@angular/core';
import { AppConfig } from './models';
import { AppContext } from './app.context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'librocloud-portal';

  public user!: AppConfig;

  constructor(
    public readonly appContext: AppContext,
    public elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    const context = this.elementRef.nativeElement.getAttribute('context');
    if (context) {
      this.appContext.config = JSON.parse(context.replace(/&quot;/g, '"'));
      this.user = this.appContext.config;
      this.appContext.filterContext = {
        filter: {
          authorId: [],
          bookGenre: [],
          bookTitle: '',
          pageNumber: 1,
          pageSize: 20,
          sortBy: 'title',
          sortOrder: 'asc',
        },
      };
    }
  }
}
