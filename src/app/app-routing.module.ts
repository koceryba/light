import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: './product-list/product-list.module#ProductListModule' },
  { path: 'product/:id', loadChildren: './product-detail/product-detail.module#ProductDetailModule', canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
