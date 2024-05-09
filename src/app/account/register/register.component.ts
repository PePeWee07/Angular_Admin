import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { Register } from '../../store/Authentication/authentication.actions';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LucideAngularModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]

})
export class RegisterComponent {

  // Login Form
  signupForm!: UntypedFormGroup;
  submitted = false;
  successmsg = false;
  error = '';
  // set the current year
  year: number = new Date().getFullYear();

  fieldTextType!: boolean;

  constructor(private formBuilder: UntypedFormBuilder, public store: Store) { }

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    const email = this.f['email'].value;
    const name = this.f['name'].value;
    const password = this.f['password'].value;

    //Dispatch Action
    this.store.dispatch(Register({ email: email, username: name, password: password }));
  }

}
