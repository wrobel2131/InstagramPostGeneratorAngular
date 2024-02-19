import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-manage-user-picture',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './manage-user-picture.component.html',
  styleUrl: './manage-user-picture.component.scss',
})
export class ManageUserPictureComponent {}
