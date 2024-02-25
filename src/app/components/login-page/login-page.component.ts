import { Component, inject } from '@angular/core';
import { BrandSectionComponent } from '../brand-section/brand-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { GoogleLoginButtonComponent } from '../google-login-button/google-login-button.component';
import { GithubLoginButtonComponent } from '../github-login-button/github-login-button.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { MobileFooterDarkComponent } from '../mobile-footer-dark/mobile-footer-dark.component';
import { TranslocoModule } from '@ngneat/transloco';
import { PickLanguageMenuComponent } from '../pick-language-menu/pick-language-menu.component';
import { ApiService } from '../../services/api.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserCredentials } from '../../models/mocked-data';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    BrandSectionComponent,
    LogoComponent,
    MobileFooterDarkComponent,
    PickLanguageMenuComponent,
    MatDividerModule,
    GoogleLoginButtonComponent,
    GithubLoginButtonComponent,
    RouterLink,
    RouterModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  formBuilder = inject(FormBuilder);
  apiService = inject(ApiService);

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  forgotPassword(): void {
    alert('forgot password alert');
  }

  login(): void {
    if (this.loginForm.valid) {
      this.apiService.login(this.userCredentials);
    }
  }

  private get userCredentials(): UserCredentials {
    return {
      login: this.loginForm.controls.login.value!,
      password: this.loginForm.controls.password.value!,
    };
  }
}
