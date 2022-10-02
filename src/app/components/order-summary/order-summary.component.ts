import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { CartService } from '../../pages/cart-page/services/cart.service';
import { OrdersService } from '../../pages/cart-page/services/orders.service';

@Component({
  selector: 'orders-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./summary.scss'],
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  endSubs$: Subject<any> = new Subject();
  totalPrice!: number;
  isCheckout = false;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.router.url.includes('checkout')
      ? (this.isCheckout = true)
      : (this.isCheckout = false);
  }

  ngOnInit(): void {
    this._getOrderSummary();
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }

  ngOnDestroy(): void {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }

  _getOrderSummary() {
    this.cartService.cart$
      .pipe(takeUntil(this.endSubs$))
      .subscribe((cart: any) => {
        this.totalPrice = 0;
        if (cart) {
          cart.items.map((item: any) => {
            this.ordersService
              .getProduct(item.productId)
              .pipe(take(1))
              .subscribe((product: any) => {
                this.totalPrice += product.price * item.quantity!;
              });
          });
        }
      });
  }
}
