import {Component, EventEmitter, inject, Input, input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../Modules/iproduct';
import {CurrencyPipe, NgIf} from '@angular/common';
import {Cartservice} from '../../services/cartservice';
import {Productservice} from '../../services/productservice';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails  implements OnInit {
  product: IProduct | null = null;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productservice=inject(Productservice);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.product = this.productservice.ViewDetails(id);
    }
  }

  close() {
    this.router.navigate(['/products']);
  }


}
