import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [PageTitleComponent, LucideAngularModule, RouterLink],
  templateUrl: './video.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class VideoComponent {

}
