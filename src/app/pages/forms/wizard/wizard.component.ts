import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [PageTitleComponent, CdkStepperModule, NgStepperModule, LucideAngularModule, FormsModule, ReactiveFormsModule],
  templateUrl: './wizard.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]
})
export class WizardComponent {

  personalInfo!: FormGroup
  accountInfoForm!: FormGroup;
  adressinform!: FormGroup;
  constructor(public formBuilder: UntypedFormBuilder) { }


  ngOnInit(): void {
    this.accountInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });

    this.personalInfo = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      emailAddress: ['', [Validators.required, Validators.email]],
      JoiningDate: ['', Validators.required],
      BirthofDate: ['', Validators.required],
    });

    this.adressinform = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      emailAddress: ['', [Validators.required, Validators.email]],
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', Validators.required],
      vta: ['', Validators.required],
      prefix: ['', Validators.required],
    });
  }
  submitAccountInfoForm() {
    if (this.isFormValid(this.accountInfoForm) && this.isFormValid(this.personalInfo) && this.isFormValid(this.adressinform)) {
      // Both form groups are valid, proceed with your logic
    }
  }

  isFormValid(form: FormGroup): boolean {
    // Check if the form group is valid
    if (form.valid) {
      return true;
    }
    // Form is invalid
    return false;
  }
}
