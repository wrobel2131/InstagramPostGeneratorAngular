import { Component } from '@angular/core';
import { BrandSectionComponent } from '../brand-section/brand-section.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { GoogleLoginButtonComponent } from '../google-login-button/google-login-button.component';
import { GithubLoginButtonComponent } from '../github-login-button/github-login-button.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    BrandSectionComponent,
    LogoComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
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
