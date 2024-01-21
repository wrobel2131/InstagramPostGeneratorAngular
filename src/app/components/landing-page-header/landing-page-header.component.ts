import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';
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
  // @HostBinding('class.fixed') isHeaderFixed = false;
  // @HostBinding('class.fixed-padding') isHeaderFixedPadding = false;
  // @HostBinding('class.not-fixed') isHeaderNotFixed = true;

  // @HostListener('window:scroll', []) onScroll() {
  //   if (window.scrollY > 50) {
  //     this.isHeaderFixed = true;
  //     this.isHeaderFixedPadding = true;

  //     this.isHeaderNotFixed = false;
  //   } else {
  //     this.isHeaderFixed = false;
  //     this.isHeaderFixedPadding = false;

  //     this.isHeaderNotFixed = true;
  //   }
  // }
}
