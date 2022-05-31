import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  imageChange(){
    var src:any = this.el.nativeElement.src;
    var prev:any = document.getElementById("preview");
    prev.src = src;
    this.el.nativeElement.parentElement.classList.add("active");
  }
}
