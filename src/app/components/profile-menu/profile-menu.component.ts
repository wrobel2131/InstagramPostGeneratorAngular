import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, MatDividerModule],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss',
})
export class ProfileMenuComponent {
  logout() {
    alert('logout button');
  }

  settings() {
    alert('settings button');
  }
}
