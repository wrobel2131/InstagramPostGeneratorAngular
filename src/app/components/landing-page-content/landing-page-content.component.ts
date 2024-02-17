import { Component } from '@angular/core';
import { ExamplePostDesktopComponent } from '../example-post-desktop/example-post-desktop.component';
import { RouterLink } from '@angular/router';
import { ExamplePostMobileComponent } from '../example-post-mobile/example-post-mobile.component';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [
    ExamplePostDesktopComponent,
    ExamplePostMobileComponent,
    RouterLink,
  ],
  templateUrl: './landing-page-content.component.html',
  styleUrl: './landing-page-content.component.scss',
})
export class LandingPageContentComponent {}
