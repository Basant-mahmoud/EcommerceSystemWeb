import { Injectable } from '@angular/core';
import {IProduct} from '../Modules/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Productservice {
  ProductList: IProduct[] = [
    { id: 1, name: 'Laptop', quantity: 5, price: 20000, img: 'assets/labtop.jpg', categoryID: 1 },
    { id: 2, name: 'Phone', quantity: 10, price: 10000, img: 'assets/phone.jpg', categoryID: 1 },
    { id: 3, name: 'T-shirt', quantity: 20, price: 300, img: 'assets/tshirt.jpg', categoryID: 2 },
    { id: 4, name: 'Jeans', quantity: 15, price: 600, img: 'assets/jeans.jpg', categoryID: 2 },
    { id: 5, name: 'Refrigerator', quantity: 0, price: 15000, img: 'assets/fridge.jpg', categoryID: 3 },
    { id: 6, name: 'Washing Machine', quantity: 4, price: 8000, img: 'assets/washing.jpg', categoryID: 3 }
  ];
  getProducts(): IProduct[] {
    return this.ProductList;
  }

  ViewDetails(id: number): IProduct | null {
    return this.ProductList.find(p => p.id === id) || null;
  }

  filterByName(searchText:string) {
    if (!(searchText ?? '').trim()) {
      return  this.ProductList;
    } else {
      return this.ProductList.filter(p =>
        p.name.toLowerCase().includes((searchText ?? '').toLowerCase())
      );
    }
  }
  filterById(id:number): IProduct {
    return this.ProductList.find(p => p.id === id)!;
  }
  filterByCategory(id: number): IProduct[] {
    if (id === 0) {
      return  this.ProductList;
    } else {
      return  this.ProductList.filter(
        p => p.categoryID === id
      );
    }
  }

}
