import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CartItemDetailed } from '../models/cart';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart.scss'],
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;
  endSubs$: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private cartService: CartService,
    private ordersService: OrdersService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._getCartDetails();
  }

  backToShop() {
    this.router.navigate(['/products']);
  }

  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartService.deleteCartItem(cartItem.product?.id);
    this.messageService.add({
      severity: 'warn',
      summary: 'Item Deleted',
      detail: 'Item deleted from the cart',
      icon: 'none',
    });
  }

  private _getCartDetails() {
    this.cartService.cart$
      .pipe(takeUntil(this.endSubs$))
      .subscribe((respCart) => {
        this.cartItemsDetailed = [];
        this.cartCount = respCart.items?.length ?? 0;
        respCart.items?.forEach((cartItem) => {
          this.ordersService
            .getProduct(cartItem?.productId!)
            .subscribe((resProduct) =>
              this.cartItemsDetailed.push({
                product: resProduct,
                quantity: cartItem.quantity,
              })
            );
        });
      });
  }

  updateCartItemQuantity(event: any, cartItem: CartItemDetailed) {
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value,
      },
      true
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Item Added',
      detail: '1 Item added to the cart',
      icon: 'none',
    });
  }

  ngOnDestroy(): void {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }
}
