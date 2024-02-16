import { Component } from '@angular/core';
import { GalleryPostElementComponent } from '../gallery-post-element/gallery-post-element.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [GalleryPostElementComponent, RouterOutlet, RouterLink],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {
  constructor(private router: Router) {}
  

  display() {
    this.router.navigate(['dashboard',{outlets: {main: ['displayed']}}]);

}
}