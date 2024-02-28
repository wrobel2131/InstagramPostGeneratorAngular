import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-generator-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    TranslocoModule,
  ],
  templateUrl: './generator-page.component.html',
  styleUrl: './generator-page.component.scss',
})
export class GeneratorPageComponent {
  router = inject(Router);
  onGeneratePost() {
    this.router.navigate(['dashboard', { outlets: { main: ['displayed'] } }]);
  }
}
