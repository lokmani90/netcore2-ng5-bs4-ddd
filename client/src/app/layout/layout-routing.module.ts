import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    { path: '',
      component: LayoutComponent,
      children : [
        { path: '', loadChildren: './home/home.module#HomeModule' },
        { path: 'home', loadChildren: './home/home.module#HomeModule' }
      ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
