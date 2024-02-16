import { Component } from '@angular/core';
import { GalleryPostElementComponent } from '../gallery-post-element/gallery-post-element.component';

@Component({
  selector: 'app-displayed-post',
  standalone: true,
  imports: [GalleryPostElementComponent],
  templateUrl: './displayed-post.component.html',
  styleUrl: './displayed-post.component.scss'
})
export class DisplayedPostComponent {

}
