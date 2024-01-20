import { Component } from '@angular/core';
import { ExamplePostDesktopComponent } from '../example-post-desktop/example-post-desktop.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page-content',
  standalone: true,
  imports: [ExamplePostDesktopComponent, RouterLink],
  templateUrl: './landing-page-content.component.html',
  styleUrl: './landing-page-content.component.scss',
})
export class LandingPageContentComponent {}
