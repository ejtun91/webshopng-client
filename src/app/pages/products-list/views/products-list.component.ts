import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage!: boolean;

  constructor(
    private productService: ProductsService,
    private catService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params?.['categoryid']
        ? this._getProducts([params?.['categoryid']])
        : this._getProducts();
      params?.['categoryid']
        ? (this.isCategoryPage = true)
        : (this.isCategoryPage = false);
    });
    this._getCategories();
  }
  private _getCategories() {
    this.catService.getCategories().subscribe((cat) => (this.categories = cat));
  }
  private _getProducts(categoriesFilter?: string[]) {
    this.productService
      .getProducts(categoriesFilter)
      .subscribe((products) => (this.products = products));
  }

  categoryFilter() {
    const selectedCategories = this.categories
      .filter((category) => category.checked)
      .map((category) => category.id!);

    this._getProducts(selectedCategories);
  }
}
