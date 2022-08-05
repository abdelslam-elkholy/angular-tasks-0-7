import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {
  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.background = "blue";
  }
  @HostListener('mouseclick') onMouseclick() {
    this.element.nativeElement.style.background = "blue";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.background = "white";
  }
  constructor(private element: ElementRef) { }

}
