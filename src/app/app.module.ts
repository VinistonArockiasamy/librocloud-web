import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { FilterComponent } from './filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseGridComponent } from './browse-grid/browse-grid.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionGridComponent } from './subscription-grid/subscription-grid.component';
import { CoreModule } from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
    RootLayoutComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    DashboardComponent,
    SubscriptionComponent,
    BrowseGridComponent,
    SubscriptionGridComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
