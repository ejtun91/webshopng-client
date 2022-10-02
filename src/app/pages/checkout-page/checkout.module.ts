import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuard } from './guard/auth-guard.service';
import { CheckoutPageComponent } from './views/checkout-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'checkout',
      },
      {
        path: '',
        component: CheckoutPageComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [CheckoutPageComponent],
  providers: [],
})
export class CheckoutModule {}
