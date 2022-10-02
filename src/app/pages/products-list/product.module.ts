import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductsListComponent } from './views/products-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductsListComponent,
      },
      {
        path: ':productId',
        component: ProductPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    CheckboxModule,
  ],
  exports: [],
  declarations: [ProductsListComponent, ProductPageComponent],
  providers: [MessageService],
})
export class ProductsModule {}
