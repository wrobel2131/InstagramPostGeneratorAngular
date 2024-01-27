import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-authenticated-layout-side-panel',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatTabsModule, LogoComponent],
  templateUrl: './authenticated-layout-side-panel.component.html',
  styleUrl: './authenticated-layout-side-panel.component.scss',
})
export class AuthenticatedLayoutSidePanelComponent {}
