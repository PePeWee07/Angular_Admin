import { Component } from '@angular/core';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { login } from '../../store/Authentication/authentication.actions';
import { AuthenticationService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LucideAngularModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }]

})
export class LoginComponent {
  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  a: any = 10;
  b: any = 20;
  toast!: false;

  // set the current year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
    private router: Router,
    private store: Store,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.user) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ['admin@themesbrand.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    const email = this.f['email'].value; // Get the username from the form
    const password = this.f['password'].value; // Get the password from the form

    // Login Api
    this.store.dispatch(login({ email: email, password: password }));
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}