
import { Directive, Input, EventEmitter, Inject, Output, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appScrollspy]'
})
export class ScrollspyDirective {

  @Input() public spiedTags : string[] = [];;
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string | undefined;

  // tslint:disable-next-line: variable-name
  constructor(private _el: ElementRef, @Inject(DOCUMENT) private document: Document,) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    let currentSection!: string ;
    const scrollTop = window.scrollY;

    for (const tagName of this.spiedTags) {
      const elements = this.document.querySelectorAll(tagName);
      for (const element of Array.from(elements)) {
        if (element.getBoundingClientRect().top <= 0) {
          currentSection = element.getAttribute('id')!;
        }
      }
    }

    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}






