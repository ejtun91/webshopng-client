import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Cart } from '../../cart-page/models/cart';
import { Order } from '../../cart-page/models/order';
import { OrderItem } from '../../cart-page/models/order-item';
import { CartService } from '../../cart-page/services/cart.service';
import { OrdersService } from '../../cart-page/services/orders.service';
import { User } from '../../login/models/user.model';
import { UsersService } from '../../login/services/users.service';

@Component({
  selector: 'orders-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout.scss'],
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  endSubs$: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private ordersService: OrdersService
  ) {}

  checkoutFormGroup!: FormGroup;
  isSubmitted = false;
  orderItems: OrderItem[] = [];
  userId!: string;
  countries: any[] = [];

  ngOnInit(): void {
    this._initCheckoutForm();
    this._autoFillUserData();
    this._getCartItems();
    this._getCountries();
  }

  private _getCartItems() {
    const cart: Cart = this.cartService.getCart();
    this.orderItems = cart.items?.map((item) => {
      return {
        product: item.productId,
        quantity: item.quantity,
      };
    })!;
  }

  private _initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  private _getCountries() {
    this.countries = this.usersService.getCountries();
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }

    const order: Order = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm?.['street'].value,
      shippingAddress2: this.checkoutForm?.['apartment'].value,
      city: this.checkoutForm?.['city'].value,
      zip: this.checkoutForm?.['zip'].value,
      country: this.checkoutForm?.['country'].value,
      phone: this.checkoutForm?.['phone'].value,
      status: 0,
      user: this.userId,
      dateOrdered: `${Date.now()}`,
    };

    this.ordersService.cacheOrderData(order);

    this.ordersService
      .createCheckoutSession(this.orderItems)
      .subscribe((error) => {
        if (error) {
          console.log('error in redirect to payment');
        }
      });
  }

  private _autoFillUserData() {
    this.usersService
      .observeCurrentUser()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((user: User) => {
        if (user) {
          this.userId = user?.id!;
          this.checkoutForm?.['name'].setValue(user?.name);
          this.checkoutForm?.['email'].setValue(user?.email);
          this.checkoutForm?.['phone'].setValue(user?.phone);
          this.checkoutForm?.['street'].setValue(user?.street);
          this.checkoutForm?.['apartment'].setValue(user?.apartment);
          this.checkoutForm?.['zip'].setValue(user?.zip);
          this.checkoutForm?.['city'].setValue(user?.city);
          this.checkoutForm?.['country'].setValue(user?.country);
        }
      });
  }

  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }

  ngOnDestroy(): void {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }
}
