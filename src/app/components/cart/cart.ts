import {Component, OnChanges, OnInit} from '@angular/core';
import {IProduct} from '../../Modules/iproduct';
import {Cartservice} from '../../services/cartservice';
import {CurrencyPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit,OnChanges {
  CartItems:IProduct[]=[];

  constructor(private cartservice:Cartservice) {
  }
  ngOnInit(): void {
    this.CartItems=this.cartservice.getCartItems();
  }
  ngOnChanges(): void {
    this.CartItems=this.cartservice.getCartItems();
  }
  GetCartItems():void {
   this.CartItems= this.cartservice.getCartItems();
  }
  ClearCartItems():void {
    this.cartservice.clearCart();
  }
  getTotal() {
    return this.cartservice.getTotal();
  }

  trackById(index: number, item: any) {
    return item.product.id;
  }

}
