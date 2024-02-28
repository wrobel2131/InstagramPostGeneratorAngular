import { Component, inject } from '@angular/core';
import { GalleryPostElementComponent } from '../gallery-post-element/gallery-post-element.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [GalleryPostElementComponent, RouterOutlet, RouterLink],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss',
})
export class GalleryPageComponent {
  router = inject(Router);

  onDisplayPost() {
    this.router.navigate(['dashboard', { outlets: { main: ['displayed'] } }]);
  }
}
