import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppContext } from '../app.context';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public applicationName = 'LibroCloud Portal';
  public isIE = false;
  public userName = '';
  isSubscriptionRoute: boolean = false;

  constructor(
    private router: Router,
    public appContext: AppContext
  ) {}

  public ngOnInit(): void {
    this.isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
    this.userName = this.appContext.config.name;

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isSubscriptionRoute = this.router.url === '/subscription';
      });
  }

  public navigateToHome(): void {
    this.router.navigateByUrl('/');
  }
}
