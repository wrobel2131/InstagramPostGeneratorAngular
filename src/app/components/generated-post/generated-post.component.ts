import { Component } from '@angular/core';
import { GalleryPostElementComponent } from '../gallery-post-element/gallery-post-element.component';

@Component({
  selector: 'app-generated-post',
  standalone: true,
  imports: [GalleryPostElementComponent],
  templateUrl: './generated-post.component.html',
  styleUrl: './generated-post.component.scss'
})
export class GeneratedPostComponent {

}
