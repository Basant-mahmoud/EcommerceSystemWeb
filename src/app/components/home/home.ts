import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  text: string = 'Trendify';
  displayText: string = '';
  index: number = 0;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    if (this.index < this.text.length) {
      this.displayText += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeEffect(), 200);
    }
  }

}
