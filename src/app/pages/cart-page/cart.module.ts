import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
import { SharedModule } from '../../shared/shared.module';
import { CartPageComponent } from './views/cart-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cart',
      },
      {
        path: '',
        component: CartPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [],
  declarations: [CartPageComponent],
  providers: [],
})
export class CartModule {}
