import { Component, inject } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatDividerModule,
    RouterModule,
    TranslocoModule,
  ],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss',
})
export class ProfileMenuComponent {
  private router: Router = inject(Router);

  onLogout() {
    this.router.navigate(['']);
  }
}
