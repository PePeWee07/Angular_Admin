import { Component, EventEmitter, Input, Output, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'md-accordian-group',
  templateUrl: './accordian-group.component.html'
})
export class AccordianGroupComponent {


  @Input() heading!: string;
  @Input() isOpen: boolean = false;
  @Input() class: string = '';
  expanded = this.isOpen;
  groupId!: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.groupId = Math.floor(Math.random() * 1000);
  }

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  getButtonElement(): HTMLElement | null {
    return this.elementRef.nativeElement.querySelector('button');
  }

  toggleAccordion(event: any) {

    if (this.expanded) {
      this.removeActiveClass()
    } else {
      this.addActiveClass()
    }

    this.expanded = !this.expanded;
    this.toggle.emit();
  }

  addActiveClass() {
    const buttonElement = this.getButtonElement();
    if (buttonElement) {
      this.renderer.addClass(buttonElement, 'active');
    }
  }

  removeActiveClass() {
    const buttonElement = this.getButtonElement();
    if (buttonElement) {
      this.renderer.removeClass(buttonElement, 'active');
    }
  }
}
