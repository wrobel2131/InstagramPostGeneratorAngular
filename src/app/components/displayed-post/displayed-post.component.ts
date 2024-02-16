import { Component } from '@angular/core';
import { GalleryPostElementComponent } from '../gallery-post-element/gallery-post-element.component';
import { PostActionBarComponent } from '../post-action-bar/post-action-bar.component';

@Component({
  selector: 'app-displayed-post',
  standalone: true,
  imports: [GalleryPostElementComponent, PostActionBarComponent],
  templateUrl: './displayed-post.component.html',
  styleUrl: './displayed-post.component.scss'
})
export class DisplayedPostComponent {

}
