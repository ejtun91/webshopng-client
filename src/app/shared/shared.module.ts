import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { CarouselItemElementDirective } from '../components/carousel-slider/carousel-item-element.directive';
import { CarouselItemDirective } from '../components/carousel-slider/carousel-item.directive';
import { CarouselSliderComponent } from '../components/carousel-slider/carousel-slider.component';
import { CategoriesBannerComponent } from '../components/categories-banner/categories-banner.component';
import { FeaturedProductsComponent } from '../components/featured-products/featured-products.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { OrderSummaryComponent } from '../components/order-summary/order-summary.component';
import { ProductItemComponent } from '../components/product-item/product-item.component';

const UX_MODULES = [
  ButtonModule,
  ToastModule,
  BadgeModule,
  CheckboxModule,
  InputNumberModule,
  RatingModule,
  DropdownModule,
  InputTextModule,
  InputMaskModule,
];

@NgModule({
  imports: [CommonModule, ...UX_MODULES, RouterModule],
  exports: [
    ...UX_MODULES,
    OrderSummaryComponent,
    ProductItemComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    GalleryComponent,
    CarouselSliderComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
  ],
  declarations: [
    OrderSummaryComponent,
    ProductItemComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    GalleryComponent,
    CarouselSliderComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
  ],
  providers: [],
})
export class SharedModule {}
