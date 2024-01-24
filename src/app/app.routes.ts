import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthenticatedLayoutComponent } from './components/authenticated-layout/authenticated-layout.component';
import { GeneratorPageComponent } from './components/generator-page/generator-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { SettingPageComponent } from './components/settings-page/settings-page.component';

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
  {
    path: 'test',
    component: GeneratorPageComponent,
    data: {
      animation: 'right',
    },
  },
  {
    path: 'dashboard',
    component: AuthenticatedLayoutComponent,
    data: {
      animation: 'right',
    },
    children: [
      {
        path: 'generator',
        component: GeneratorPageComponent,
      },
      {
        path: 'gallery',
        component: GalleryPageComponent,
      },
      {
        path: 'settings',
        component: SettingPageComponent,
      },
    ],
  },
];
