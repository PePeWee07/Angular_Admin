import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DrawerService } from './drawer.service';

@Directive({
  selector: '[DrawerTrigger]',
})
export class DrawerTriggerDirective {
  @Input('DrawerTrigger') drawerId!: string;

  constructor(private renderer: Renderer2, private drawerService: DrawerService) { }

  @HostListener('click')
  onClick() {
    this.drawerService.open(this.drawerId);
    document.body.classList.add('overflow-hidden')
    this.appendDivToBody();
  }


  private appendDivToBody() {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'fixed');
    this.renderer.addClass(div, 'inset-0');
    this.renderer.addClass(div, 'bg-slate-900/40');
    this.renderer.addClass(div, 'dark:bg-zink-800/70');
    this.renderer.addClass(div, 'z-[1049]');
    this.renderer.addClass(div, 'drawer-backdrop');
    this.renderer.appendChild(document.body, div);

    // Optionally, you can add a click event listener to handle removal
    this.renderer.listen(div, 'click', () => {
      this.removeDivFromBody(div);
    });
  }

  private removeDivFromBody(div: any) {
    this.drawerService.close(this.drawerId);
    document.body.classList.remove('overflow-hidden')
    this.renderer.removeChild(document.body, div);
  }
}