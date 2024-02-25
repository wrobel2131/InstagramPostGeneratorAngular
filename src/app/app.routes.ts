import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthenticatedLayoutComponent } from './components/authenticated-layout/authenticated-layout.component';
import { GeneratorPageComponent } from './components/generator-page/generator-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { SettingPageComponent } from './components/settings-page/settings-page.component';
import { DisplayedPostComponent } from './components/displayed-post/displayed-post.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/landing-page/landing-page.component').then(
        (c) => c.LandingPageComponent
      ),
    data: {
      animation: 'down',
    },
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./components/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
    data: {
      animation: 'left',
    },
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/register-page/register-page.component').then(
        (c) => c.RegisterPageComponent
      ),
    data: {
      animation: 'right',
    },
  },
  {
    path: 'dashboard',
    component: AuthenticatedLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./authenticated.routes').then((r) => r.authenticatedRoutes),
    data: {
      animation: 'right',
    },
  },
];
