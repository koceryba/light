import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductDetailComponent },
];

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductDetailModule { }
