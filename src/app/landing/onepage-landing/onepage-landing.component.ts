import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
// Countup
import { CountUpModule } from 'ngx-countup';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { ScrollSpyModule } from '../../Component/scrollspy';
import { MnDropdownComponent } from '../../Component/dropdown';


@Component({
  selector: 'app-onepage-landing',
  standalone: true,
  imports: [CountUpModule, LucideAngularModule, CommonModule, ScrollToModule, ScrollSpyModule, MnDropdownComponent],
  templateUrl: './onepage-landing.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }, ScrollToService]
})
export class OnepageLandingComponent {
  currentSection = 'home';
  ngOnInit(): void {
    document.documentElement.classList.add('overflow-x-hidden')
  }

  ngOnDestroy() {
    document.documentElement.classList.remove('overflow-x-hidden')
  }


  windoscroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
      document.getElementById('back-to-top')!.style.opacity = '1'
    }
    else {
      navbar?.classList.remove('is-sticky');
      document.getElementById('back-to-top')!.style.opacity = '0'
    }
  }


  year = (new Date().getFullYear())

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onSectionChange(section: any) {
    this.currentSection = section
  }

}
