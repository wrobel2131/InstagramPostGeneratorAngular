import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-post-action-bar',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './post-action-bar.component.html',
  styleUrl: './post-action-bar.component.scss',
})
export class PostActionBarComponent {}
