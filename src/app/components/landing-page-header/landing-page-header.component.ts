import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page-header',
  standalone: true,
  imports: [MatButtonModule, LogoComponent, RouterLink],
  templateUrl: './landing-page-header.component.html',
  styleUrl: './landing-page-header.component.scss',
})
export class LandingPageHeaderComponent {
  logoWidth = '120px';
  logoHeight = '120px';
}
