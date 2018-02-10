import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SessionService } from '../session/session.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    imports: [],
    declarations: [],
    providers:    [ SessionService ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
