import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartItem } from '../../pages/cart-page/models/cart';
import { CartService } from '../../pages/cart-page/services/cart.service';
import { Product } from '../../pages/products-list/models/product.model';

@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };
    this.cartService.setCartItem(cartItem);
    this.cartService.setCartItem(cartItem);
    this.messageService.add({
      severity: 'success',
      summary: 'Item Added',
      detail: '1 Item added to the cart',
      icon: 'none',
    });
  }
}
