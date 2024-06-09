import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { restServices} from './rest-proxies/environments/environment';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...restServices
      ],
    };
  }
}
