import { Component } from '@angular/core';
import { BrandSectionComponent } from '../brand-section/brand-section.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    BrandSectionComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    RouterLink,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {}
