import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-gallery-post-element',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './gallery-post-element.component.html',
  styleUrl: './gallery-post-element.component.scss',
})
export class GalleryPostElementComponent {
  private userDataService: UserDataService = inject(UserDataService);

  user = this.userDataService.user;
}
