import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective {
  @Input('appModalTrigger') modalId!: string;
    
  constructor(private el: ElementRef, private modalService: ModalService) {}

  @HostListener('click')
  onClick() {
    this.modalService.open(this.modalId);
  }
}