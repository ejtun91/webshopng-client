import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { MessageService } from 'primeng/api';

import { CartService } from '../cart-page/services/cart.service';
import { CartItem } from '../cart-page/models/cart';
import { ProductsService } from '../products-list/views/services/products.service';
import { Product } from '../products-list/models/product.model';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.scss'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  endSubs$: Subject<any> = new Subject();
  quantity = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params?.['productid']) {
        this._getProduct(params?.['productid']);
      }
    });
  }
  private _getProduct(id: string) {
    this.productService
      .getProduct(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((res) => {
        this.product = res;
      });
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity,
    };
    this.cartService.setCartItem(cartItem);
    this.messageService.add({
      severity: 'success',
      summary: 'Item Added',
      detail: '1 Item added to the cart',
      icon: 'none',
    });
  }

  ngOnDestroy() {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }
}
