import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../pages/products-list/models/category.model';
import { CategoriesService } from '../../pages/products-list/views/services/categories.service';

@Component({
  selector: 'products-categories-banner',
  templateUrl: './categories-banner.component.html',
  styleUrls: ['./banner.scss'],
})
export class CategoriesBannerComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  endSubs$: Subject<any> = new Subject();
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endSubs$))
      .subscribe((categories) => (this.categories = categories));
  }

  ngOnDestroy(): void {
    this.endSubs$.next(null);
    this.endSubs$.complete();
  }
}
