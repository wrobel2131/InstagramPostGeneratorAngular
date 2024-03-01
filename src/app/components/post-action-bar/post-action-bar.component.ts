import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { InstagramPost } from '../../models/instagram-post.model';

@Component({
  selector: 'app-post-action-bar',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './post-action-bar.component.html',
  styleUrl: './post-action-bar.component.scss',
})
export class PostActionBarComponent {
  @Input() post: InstagramPost | undefined = undefined;
}
