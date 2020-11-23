import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductModule } from './product.module';

const routes: Routes = [
  {
    path: "product/list",
    component: ProductListComponent
  },
  {
    path: "product",
    pathMatch: "full",
    redirectTo: "product/list"
  },
  {
    path: "product/creator",
    component: ProductListComponent
  },
  {
    path: "product/editor",
    component: ProductListComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
