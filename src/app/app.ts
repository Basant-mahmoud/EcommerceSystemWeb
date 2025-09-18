import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Products} from './components/products/products';
import {CreditCardPipe} from './pipes/credit-card-pipe';
import {ProductCards} from './components/product-cards/product-cards';
import {Clock} from './components/clock/clock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Products, CreditCardPipe, ProductCards, Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showClock = true;
  protected readonly title = signal('lab2');
  toggleClock() {
    this.showClock = !this.showClock;
  }
}
