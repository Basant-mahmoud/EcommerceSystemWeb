import {Component, inject, Input, OnChanges, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductCard} from "../../directives/product-card";
import {ProductDetails} from "../product-details/product-details";
import {IProduct} from '../../Modules/iproduct';
import {Products} from '../products/products';
import {Productservice} from '../../services/productservice';
import {Cartservice} from '../../services/cartservice';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-cards',
  imports: [
    CurrencyPipe,
    DatePipe,
    FormsModule,
    ProductCard,
    ProductDetails,
    RouterLink,
    NgClass,
  ],
  templateUrl: './product-cards.html',
  styleUrl: './product-cards.css'
})
export class ProductCards  implements OnInit, OnChanges{
  products: IProduct[] = [];
  filteredProducts: IProduct[]=[];
  selectedProduct: IProduct | null = null;
  @Input() searchText: string|undefined;
  @Input() selectedCategory: number = 0;
  mydate:Date = new Date();

  constructor(private productservice: Productservice,private cartservice:Cartservice) {

  }


  ngOnInit() {
   this.products=this.productservice.getProducts();
   this.filteredProducts=[...this.products]
  }
  ngOnChanges(): void {
    if (this.searchText && this.searchText.trim() !== '') {
    this.filteredProducts=  this.productservice.filterByName(this.searchText);
    } else if (this.selectedCategory !== 0) {
     this.filteredProducts= this.productservice.filterByCategory(this.selectedCategory);

    }
    else {
      this.filteredProducts = [...this.products];
    }
  }
  AddToCart(product:IProduct){
    this.cartservice.AddToCart(product);
  }
  ViewDetails(id: number) {
    this.productservice.ViewDetails(id);
  }
  getProductByID(id:number){
    this.productservice.filterById(id);
  }

  filterByName(searchText:string) {
    this.productservice.filterByName(searchText);
  }
  filterByCategory(id: number) {
   this.productservice.filterByCategory(id);
  }

}
