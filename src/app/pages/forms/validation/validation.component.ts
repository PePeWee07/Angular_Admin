import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [PageTitleComponent, FormsModule, ReactiveFormsModule, CommonModule,LucideAngularModule],
  templateUrl: './validation.component.html',
  styles: ``,
  providers:[{provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons)}]
})
export class ValidationComponent {

  validation!: FormGroup;
  formsubmit!: boolean;
  submit = false;

  constructor(public formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.validation = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
    })
  }

  /**
 * Returns form
 */
  get form() {
    return this.validation.controls;
  }

  // form submit
  formSubmit() {
    this.submit = true;
  }
}
