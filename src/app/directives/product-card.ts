import {Directive, ElementRef, Host, HostListener} from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCard {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.borderRadius = '12px';
    this.element.nativeElement.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    this.element.nativeElement.style.transition = 'all 0.3s ease';
    this.element.nativeElement.style.border = '2px solid transparent';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.border = '2px solid purple';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.border = '2px solid transparent';
  }

}
