import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "products"
  },
  {
    path: "products",
    pathMatch: "full",
    loadChildren: () => import('./modules/products/products-page.module').then(m => m.ProductsPageModule)
  },
  {
    path: "admin",
    pathMatch: "full",
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
