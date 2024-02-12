import { Component } from '@angular/core';
import { GalleryPostElementComponent } from '../gallery-post-element/gallery-post-element.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [GalleryPostElementComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {

}
