import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomColor]',
  standalone: true
})
export class CustomColorDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.textDecoration = 'underline';
  }

}
