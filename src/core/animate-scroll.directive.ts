import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          observer.unobserve(this.el.nativeElement); // solo una vez
        }
      });
    }, { threshold: 0.3 }); // 20% visible

    this.el.nativeElement.classList.add('animate-on-scroll');
    observer.observe(this.el.nativeElement);
  }
}
