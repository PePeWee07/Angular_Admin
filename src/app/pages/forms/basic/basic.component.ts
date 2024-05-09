import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [PageTitleComponent, FormsModule, ReactiveFormsModule,LucideAngularModule],
  templateUrl: './basic.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class BasicComponent {
  textInput: string = '';
  // passwordInput: string = '';

  submitForm() {
    // Add your form submission logic here
  }
}
