import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ProductsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsPageRoutingModule { }
