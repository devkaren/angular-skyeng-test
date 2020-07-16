import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportSizeDirective } from './directives/viewport-size.directive';
import { IConfig, Config } from './models/iconfig';
import { ViewportService } from './services/viewport.service';

@NgModule({
  declarations: [ViewportSizeDirective],
  imports: [
    CommonModule
  ],
  exports: [ViewportSizeDirective]
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(config: IConfig): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ViewportService,
        {
          provide: Config,
          useValue: config
        }
      ]
    };
  }
}
