import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [
    RouterLink
  ],
  template: `
    <div class="text-center mt-5">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a routerLink="/home" class="btn btn-primary">Go Back Home</a>
    </div>
  `,
  styleUrl: './notfound.css'
})
export class Notfound {

}
