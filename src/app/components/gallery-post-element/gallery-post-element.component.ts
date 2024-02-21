import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-gallery-post-element',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './gallery-post-element.component.html',
  styleUrl: './gallery-post-element.component.scss',
})
export class GalleryPostElementComponent {}
