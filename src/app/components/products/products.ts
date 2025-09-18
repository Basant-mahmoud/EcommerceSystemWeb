import {Component, Input} from '@angular/core';
import {IProduct} from '../../Modules/iproduct';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe, DatePipe, } from '@angular/common';
import {ProductCard} from '../../directives/product-card';
import {ProductDetails} from '../product-details/product-details';
import {ProductCards} from '../product-cards/product-cards';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule,
    ProductCard,
    CurrencyPipe,
    DatePipe,
    ProductDetails,
    ProductCards,
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
searchText: string|undefined ;
selectedCategory: number = 0;

}
