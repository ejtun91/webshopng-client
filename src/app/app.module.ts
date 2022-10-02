import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './pages/login/+state/users.effects';
import * as fromUsers from './pages/login/+state/users.reducer';
import { UsersFacade } from './pages/login/+state/users.facade';
import { CartService } from './pages/cart-page/services/cart.service';
import { NgxStripeModule } from 'ngx-stripe';
import { JwtInterceptor } from './pages/login/services/jwt.interceptor';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    CartIconComponent,
    ProductsSearchComponent,
    ThankYouComponent,
    CartIconComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      users: fromUsers.reducer,
    }),
    EffectsModule.forRoot([UsersEffects]),
    NgxStripeModule.forRoot(
      'pk_test_51JeM2XJkQtS6tNOvmFbbTzKssWBcHhXPogQKmih8RtEzw6MZczDMecUnhSkJ84RMOPYdSOl1D5Ddt2Al6z2joIpT00INC2kkfm'
    ),
  ],
  providers: [
    MessageService,
    UsersFacade,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage();
  }
}
