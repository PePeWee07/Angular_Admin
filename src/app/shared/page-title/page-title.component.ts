import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html'
})
export class PageTitleComponent {
  @Input() title: string | undefined;
  @Input() pagetitle: string | undefined;
}
