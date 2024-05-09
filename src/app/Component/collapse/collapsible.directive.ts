// collapsible.directive.ts
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCollapsible]',
  standalone: true
})
export class CollapsibleDirective {
  @Input() isOpen: boolean = false;
  isCollapsed: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Initialize isCollapsed based on isOpen
    this.isCollapsed = !this.isOpen;
  }

  @HostListener('click') onClick() {
    this.toggleCollapse();
    // this.updateIcon();
  }

  private toggleCollapse() {
    this.isOpen = true;
    if (this.isOpen) {
      // If isOpen is true, toggle isCollapsed
      this.isCollapsed = !this.isCollapsed;
      const collapsibleBody = this.el.nativeElement.nextElementSibling;

      if (this.isCollapsed) {
        this.renderer.addClass(collapsibleBody, 'hidden');
        this.el.nativeElement.classList.remove('show')
      } else {
        this.renderer.removeClass(collapsibleBody, 'hidden');
        this.el.nativeElement.classList.add('show')
      }
    }
  }
}