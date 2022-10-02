import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart-page/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products-list/product.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/checkout-page/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
  {
    path: 'success',
    component: ThankYouComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
