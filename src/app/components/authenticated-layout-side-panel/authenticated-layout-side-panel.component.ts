import { Component, OnInit } from '@angular/core';
import {
  ChildrenOutletContexts,
  Route,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-authenticated-layout-side-panel',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatTabsModule,
    LogoComponent,
    RouterLinkActive,
  ],
  templateUrl: './authenticated-layout-side-panel.component.html',
  styleUrl: './authenticated-layout-side-panel.component.scss',
})
export class AuthenticatedLayoutSidePanelComponent implements OnInit {
  links!: Route[];

  ngOnInit(): void {
    this.links = this.getDashboardLinks();
  }

  getDashboardLinks(): Route[] {
    return (
      routes
        .find((route) => route.path === 'dashboard')
        ?.children?.filter((child) => child.path !== '' && ['gallery', 'generator'].includes(child.path!)) || []
    );
  }
}
