import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../Modules/iproduct';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe, DatePipe, NgForOf,} from '@angular/common';
import {ProductCard} from '../../directives/product-card';
import {ProductDetails} from '../product-details/product-details';
import {ProductCards} from '../product-cards/product-cards';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../../services/category-service';
import {ICategory} from '../../Modules/icategory';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule,
    ProductCards,
    NgForOf,
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
searchText: string|undefined ;
selectedCategory: number = 0;
categories: ICategory[] = [];
constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Error loading categories', err)
    });
  }
}
