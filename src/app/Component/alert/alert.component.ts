import { ChangeDetectorRef, Component, EventEmitter, Input, Output, Renderer2, TemplateRef } from '@angular/core';


@Component({
  selector: '[md-alert]',
  templateUrl: './alert.component.html'
})
export class MDAlertComponent {
  @Input() type = 'warning';
  @Input() dismissible = false;
  @Input() icon: string = '';
  @Input() customCloseButton!: string;
  @Input() isOpen = true;
  @Input() closeButtonStyle: string = '';
  @Input() closeButtonText: string = '';
  @Input() closeButtonIcon: string = '';

  @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  close(event: any): void {
    this.isOpen = false;
    event.target.parentElement.closest('.alert-dismissible').classList.add('hidden');
    // if (!this.isOpen) {
    //   return;
    // }

    // // this.onClose.emit(this);
    // this.isOpen = false;
    // this.dismissedChanged.next(this.isOpen);
    this._changeDetectorRef.markForCheck();
  }
}
