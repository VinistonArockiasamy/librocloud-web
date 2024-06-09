import { Injectable } from '@angular/core';

import { AppConfig } from './models';
import { FilterContext } from './filter/filter.context';

@Injectable({
  providedIn: 'root'
})
export class AppContext {
  public config!: AppConfig;
  public filterContext!: FilterContext;
  public resetFilter!: boolean;
}
