import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Observable, Subject, zip } from 'rxjs';
import { ModalService } from './modal.service';

@Component({
  selector: 'ng-modals',
  template: `
    <ng-container *ngIf="isOpen">
      <div [attr.modal-center]="placement === 'modal-center' ? true : null"
           [attr.modal-top]="placement === 'modal-top' ? true : null"
           [attr.modal-bottom]="placement === 'modal-bottom' ? true : null"
           [ngClass]="className">
        <ng-content></ng-content>
      </div>
    </ng-container>
    
    <div class="fixed inset-0 bg-slate-900/40 dark:bg-zink-800/70 z-[1049] backdrop-overlay" [ngClass]="{'hidden': !isOpen}"id="backDropDiv" ></div>
`,
  encapsulation: ViewEncapsulation.None,
})
export class MDModalsComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() className!: string;
  @Input() placement!: string;
  @Input() backdrop: boolean | string = true;
  @Input() backdropDismiss: boolean = true; // Allow backdrop dismiss by default
  @Input() escDismiss: boolean = true;



  @Output() closed = new EventEmitter<void>();

  shown = new Subject<void>();
  hidden = new Subject<void>();

  constructor(private modalService: ModalService,
    private renderer: Renderer2,
    private el: ElementRef) { }

  get isOpen() {
    return this.modalService.isOpen(this.id);
  }

  open() {
    this.modalService.open(this.id);// Show backdrop when modal is opened
  }

  close() {
    this.modalService.close(this.id);
    this.closed.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKeydown(event: KeyboardEvent) {
    if (this.escDismiss) {
      this.close();
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onBackdropClick(event: MouseEvent) {
    if (this.backdropDismiss) {
      const isBackdrop = (event.target as HTMLElement).classList.contains('backdrop-overlay');
      if (isBackdrop && this.isOpen) {
        // this.close();
      }
    }
  }
}
