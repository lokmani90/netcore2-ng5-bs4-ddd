import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guard/auth.guard';

const appRoutes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule' ,  canActivate: [AuthGuard]  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
