import { Injectable } from '@angular/core';
import {IProduct} from '../Modules/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
  cartItems:IProduct[]=[];

  AddToCart(product: IProduct) {
    if(product.quantity>=1){
      product.quantity--;
      const existingProduct = this.cartItems.find(p => p.id === product.id);
      if(existingProduct){
        existingProduct.quantity++
      }
      else{
        this.cartItems.push({...product, quantity: 1});
      }
    }

  }
  getCartItems(): IProduct[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
  getTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );
  }
}
