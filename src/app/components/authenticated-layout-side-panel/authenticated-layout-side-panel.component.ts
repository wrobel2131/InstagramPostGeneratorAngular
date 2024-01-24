import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authenticated-layout-side-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './authenticated-layout-side-panel.component.html',
  styleUrl: './authenticated-layout-side-panel.component.scss',
})
export class AuthenticatedLayoutSidePanelComponent {}
