import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageProductComponent } from './page-product/page-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product' },
  { path: 'product', component: PageProductComponent },
  { path: 'cart', component: PageCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
