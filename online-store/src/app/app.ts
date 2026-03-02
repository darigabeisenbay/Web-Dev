import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CATEGORIES, PRODUCTS } from './product.data';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  categories = CATEGORIES;
  selectedCategory: number | null = null;

  selectCategory(id: number) {
    this.selectedCategory = id;
  }

  get filteredProducts(): Product[] {
    return PRODUCTS.filter(p => p.categoryId === this.selectedCategory);
  }
}