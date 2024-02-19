import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

interface Language {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-pick-language-menu',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './pick-language-menu.component.html',
  styleUrl: './pick-language-menu.component.scss',
})
export class PickLanguageMenuComponent {
  languages: Language[] = [
    {
      name: 'Polish',
      icon: '🇵🇱',
    },
    {
      name: 'English',
      icon: '🇬🇧',
    },
  ];

  selected = this.languages[0];
}
