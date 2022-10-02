import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart-page/services/cart.service';
import { OrdersService } from '../cart-page/services/orders.service';

@Component({
  selector: 'orders-thank-you',
  templateUrl: './thank-you.component.html',
  styles: [],
})
export class ThankYouComponent implements OnInit, OnDestroy {
  constructor(
    private ordersService: OrdersService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const orderData = this.ordersService.getCachedOrderData();
    if (!orderData) {
      this.router.navigate(['/']);
    }

    console.log(orderData);

    this.ordersService.createOrder(orderData).subscribe({
      complete: () => {
        this.cartService.emptyCart();
        this.ordersService.removeCachedOrderData();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {}
}
