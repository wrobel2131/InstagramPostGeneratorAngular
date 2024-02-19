import { Component } from '@angular/core';
import { BrandSectionComponent } from '../brand-section/brand-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { LandingPageFooterComponent } from '../landing-page-footer/landing-page-footer.component';
import { MobileFooterDarkComponent } from '../mobile-footer-dark/mobile-footer-dark.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    BrandSectionComponent,
    MobileFooterDarkComponent,
    LogoComponent,
    MatDividerModule,
    RouterLink,
    TranslocoModule,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {}
