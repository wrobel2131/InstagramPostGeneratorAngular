import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { TranslationService } from '../../services/translation.service';
import { AvailableLangs } from '@ngneat/transloco';
import { SUPPORTED_LANGUAGES } from '../../models/supported-languages';
import { Language } from '../../models/language.model';

@Component({
  selector: 'app-pick-language-menu',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './pick-language-menu.component.html',
  styleUrl: './pick-language-menu.component.scss',
})
export class PickLanguageMenuComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  languages!: Language[];

  selected!: Language;

  ngOnInit(): void {
    this.languages = this.translationService.getAvailableLanguages();
    this.selected = this.translationService.getActiveLanguage();
    console.log(this.translationService.getAvailableLanguages());
    console.log(this.translationService.getActiveLanguage());
  }

  changeLang(event: MatSelectChange) {
    console.log(event);
    this.translationService.changeActiveLanguage(event.value);
    // console.log(this.translationService.getActiveLanguage());
  }

  getFlagClass(code: string): string {
    console.log('flag-icon flag-icon-' + code);
    return 'fi fi-' + code;
  }
}
