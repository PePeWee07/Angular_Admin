import { Component, HostListener, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { DrawerService } from './drawer.service';

@Component({
    selector: 'drawer',
    template: `

<div *ngIf="isOpen" >
<div class="fixed flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow z-drawer show dark:bg-zink-600"
[ngClass]="getClass()">
    <ng-content></ng-content>
</div>
</div>

  `,
    encapsulation: ViewEncapsulation.None,
})
export class CustomDrawerComponent {

    @Input() id!: string;
    @Input() title!: string;
    @Input() position = 'drawer-end';
    @Input() backdrop: boolean | string = true;
    @Input() backdropDismiss: boolean = true; // Allow backdrop dismiss by default
    @Input() escDismiss: boolean = true;

    @Output() closed = new EventEmitter<void>();

    shown = new Subject<void>();
    hidden = new Subject<void>();

    constructor(private modalService: DrawerService) { }

    get isOpen() {
        return this.modalService.isOpen(this.id);
    }

    getClass(position?: any) {
        if (position) {
            this.position = position
        }
        const classList = {
            'top-0': this.position === 'drawer-top',
            'bottom-0': this.position === 'drawer-bottom',
            'ltr:right-0 rtl:left-0 md:w-96': this.position === 'drawer-end',
            'ltr:left-0 rtl:right-0 md:w-80': this.position === 'drawer-start',
            'inset-y-0': this.position === 'drawer-start' || this.position === 'drawer-end',
            'left-0 right-0 md:h-80': this.position === 'drawer-top' || this.position === 'drawer-bottom',
        };
        return classList;
        /* eslint-enable @typescript-eslint/naming-convention */
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
            const isBackdrop = (event.target as HTMLElement).classList.contains('modal-overlay');
            if (isBackdrop && this.isOpen) {
                this.close();
            }
        }
    }


}