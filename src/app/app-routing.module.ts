import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientRoutingModule } from './client/client-routing.module';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './general/home/home.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { ProductRoutingModule } from './product/product-routing.module';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GeneralModule,
    ClientRoutingModule,
    ProductRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
