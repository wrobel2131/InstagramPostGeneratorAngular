import { Component } from '@angular/core';
import { BrandSectionComponent } from '../brand-section/brand-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { GoogleLoginButtonComponent } from '../google-login-button/google-login-button.component';
import { GithubLoginButtonComponent } from '../github-login-button/github-login-button.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { MobileFooterDarkComponent } from '../mobile-footer-dark/mobile-footer-dark.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    BrandSectionComponent,
    LogoComponent,
    MobileFooterDarkComponent,
    MatDividerModule,
    GoogleLoginButtonComponent,
    GithubLoginButtonComponent,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  forgotPassword() {
    alert('forgot password alert');
  }

  onLogin() {
    this.router.navigate(['/dashboard/generator']);
  }
}
