import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { rootReducer } from './store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LucideAngularModule, icons } from 'lucide-angular';
import { provideEffects } from '@ngrx/effects';
import { EcommerceEffects } from './store/Ecommerce/ecommerce-effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { HRManagementEffects } from './store/HR/hr-effects';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { NotesEffects } from './store/Note/notes-effect';
import { SocialEffects } from './store/Social/social-effect';
import { UserEffects } from './store/User/user-effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarEffects } from './store/Calendar/calendar.effects';

// Auth
import { initFirebaseBackend } from './authUtils';

import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { FakeBackendInterceptor } from './core/helpers/fake-backend';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment.prod';
import { AuthenticationEffects } from './store/Authentication/authentication.effects';
import { provideToastr } from 'ngx-toastr';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/');
}

if (environment.defaultauth === 'firebase') {
  initFirebaseBackend(environment.firebaseConfig);
} else {
  FakeBackendInterceptor;
}

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature),
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
  provideClientHydration(),
  provideStore(rootReducer),
  provideEffects(EcommerceEffects, HRManagementEffects, NotesEffects, SocialEffects, UserEffects, CalendarEffects, AuthenticationEffects),
  provideToastr({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
  }),
  provideStoreDevtools(),
  provideEnvironmentNgxMask(),
  provideHttpClient(withFetch()),
    TranslateService,
  importProvidersFrom(
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LucideAngularModule.pick(icons),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  )
  ]
};
