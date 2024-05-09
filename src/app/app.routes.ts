import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';

// auth
import { LoginBasicComponent } from './account/auth/login/login-basic/login-basic.component';
import { LoginCoverComponent } from './account/auth/login/login-cover/login-cover.component';
import { LoginBoxedComponent } from './account/auth/login/login-boxed/login-boxed.component';
import { LoginModernComponent } from './account/auth/login/login-modern/login-modern.component';
import { RegisterBasicComponent } from './account/auth/register/register-basic/register-basic.component';
import { RegisterCoverComponent } from './account/auth/register/register-cover/register-cover.component';
import { RegisterBoxedComponent } from './account/auth/register/register-boxed/register-boxed.component';
import { RegisterModernComponent } from './account/auth/register/register-modern/register-modern.component';
import { VerifyEmailBasicComponent } from './account/auth/verify-email/verify-email-basic/verify-email-basic.component';
import { VerifyEmailCoverComponent } from './account/auth/verify-email/verify-email-cover/verify-email-cover.component';
import { VerifyEmailModernComponent } from './account/auth/verify-email/verify-email-modern/verify-email-modern.component';
import { TwostepBasicComponent } from './account/auth/twostep/twostep-basic/twostep-basic.component';
import { TwostepCoverComponent } from './account/auth/twostep/twostep-cover/twostep-cover.component';
import { TwostepBoxedComponent } from './account/auth/twostep/twostep-boxed/twostep-boxed.component';
import { TwostepModernComponent } from './account/auth/twostep/twostep-modern/twostep-modern.component';
import { LogoutBasicComponent } from './account/auth/logout/logout-basic/logout-basic.component';
import { LogoutCoverComponent } from './account/auth/logout/logout-cover/logout-cover.component';
import { LogoutBoxedComponent } from './account/auth/logout/logout-boxed/logout-boxed.component';
import { LogoutModernComponent } from './account/auth/logout/logout-modern/logout-modern.component';
import { ResetPassBasicComponent } from './account/auth/reset-pass/reset-pass-basic/reset-pass-basic.component';
import { ResetPassCoverComponent } from './account/auth/reset-pass/reset-pass-cover/reset-pass-cover.component';
import { ResetPassBoxedComponent } from './account/auth/reset-pass/reset-pass-boxed/reset-pass-boxed.component';
import { ResetPassModernComponent } from './account/auth/reset-pass/reset-pass-modern/reset-pass-modern.component';
import { CreatePassBasicComponent } from './account/auth/create-pass/create-pass-basic/create-pass-basic.component';
import { CreatePassCoverComponent } from './account/auth/create-pass/create-pass-cover/create-pass-cover.component';
import { CreatePassBoxedComponent } from './account/auth/create-pass/create-pass-boxed/create-pass-boxed.component';
import { CreatePassModernComponent } from './account/auth/create-pass/create-pass-modern/create-pass-modern.component';

import { ComingSoonComponent } from './extrapages/coming-soon/coming-soon.component';
import { MaintenanceComponent } from './extrapages/maintenance/maintenance.component';
import { Error404Component } from './extrapages/error404/error404.component';
import { OfflineComponent } from './extrapages/offline/offline.component';
import { OnepageLandingComponent } from './landing/onepage-landing/onepage-landing.component';
import { ProductLandingComponent } from './landing/product-landing/product-landing.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.route').then(mod => mod.PAGE_ROUTES), canActivate: [AuthGuard] },

    // Auth
    { path: 'account-login', component: LoginComponent },
    { path: 'account-register', component: RegisterComponent },
    { path: 'auth-login-basic', component: LoginBasicComponent },
    { path: 'auth-login-cover', component: LoginCoverComponent },
    { path: 'auth-login-boxed', component: LoginBoxedComponent },
    { path: 'auth-login-modern', component: LoginModernComponent },

    { path: 'auth-register-basic', component: RegisterBasicComponent },
    { path: 'auth-register-cover', component: RegisterCoverComponent },
    { path: 'auth-register-boxed', component: RegisterBoxedComponent },
    { path: 'auth-register-modern', component: RegisterModernComponent },

    { path: 'auth-verify-email-basic', component: VerifyEmailBasicComponent },
    { path: 'auth-verify-email-cover', component: VerifyEmailCoverComponent },
    { path: 'auth-verify-email-modern', component: VerifyEmailModernComponent },

    { path: 'auth-two-steps-basic', component: TwostepBasicComponent },
    { path: 'auth-two-steps-cover', component: TwostepCoverComponent },
    { path: 'auth-two-steps-boxed', component: TwostepBoxedComponent },
    { path: 'auth-two-steps-modern', component: TwostepModernComponent },

    { path: 'auth-logout-basic', component: LogoutBasicComponent },
    { path: 'auth-logout-cover', component: LogoutCoverComponent },
    { path: 'auth-logout-boxed', component: LogoutBoxedComponent },
    { path: 'auth-logout-modern', component: LogoutModernComponent },

    { path: 'auth-reset-password-basic', component: ResetPassBasicComponent },
    { path: 'auth-reset-password-cover', component: ResetPassCoverComponent },
    { path: 'auth-reset-password-boxed', component: ResetPassBoxedComponent },
    { path: 'auth-reset-password-modern', component: ResetPassModernComponent },

    { path: 'auth-create-password-basic', component: CreatePassBasicComponent },
    { path: 'auth-create-password-cover', component: CreatePassCoverComponent },
    { path: 'auth-create-password-boxed', component: CreatePassBoxedComponent },
    { path: 'auth-create-password-modern', component: CreatePassModernComponent },


    // Landing Pages
    { path: 'onepage-landing', component: OnepageLandingComponent },
    { path: 'product-landing', component: ProductLandingComponent },



    // extrapages
    { path: 'pages-coming-soon', component: ComingSoonComponent },
    { path: 'pages-maintenance', component: MaintenanceComponent },
    { path: 'pages-404', component: Error404Component },
    { path: 'pages-offline', component: OfflineComponent },

];


