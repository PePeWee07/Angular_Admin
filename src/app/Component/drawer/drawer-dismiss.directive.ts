import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DrawerService } from './drawer.service';

@Directive({
  selector: '[dismissDrawer]',
})
export class DrawerDismissDirective {
  @Input('DrawerDismiss') drawerId!: string;

  constructor(private drawerService: DrawerService, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    // Here, you can close the modal using the `modalService`
    this.drawerService.close(this.drawerId);
    const div = document.documentElement.querySelector('.drawer-backdrop')
    this.removeDivFromBody(div);
  }

  private removeDivFromBody(div: any) {
    this.drawerService.close(this.drawerId);
    document.body.classList.remove('overflow-hidden');
    this.renderer.removeChild(document.body, div);
  }
}