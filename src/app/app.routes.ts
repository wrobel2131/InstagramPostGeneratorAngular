import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      animation: 'down',
    },
  },
  {
    path: 'signin',
    component: LoginPageComponent,
    data: {
      animation: 'left',
    },
  },
  {
    path: 'signup',
    component: RegisterPageComponent,
    data: {
      animation: 'right',
    },
  },
];
