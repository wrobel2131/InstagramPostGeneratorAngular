import { Injectable } from '@angular/core';
import {
  AvailableLangs,
  LangDefinition,
  TranslocoService,
} from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translocoService: TranslocoService) {}

  getAvailableLanguages(): AvailableLangs {
    return this.translocoService.getAvailableLangs();
  }

  getActiveLanguage(): string {
    return this.translocoService.getActiveLang()
  }

  setDefaultLanguage() {
    let currentLanguage = localStorage.getItem("lang");
    if (currentLanguage && this.checkIfLanguageAvailable(currentLanguage)) {
      this.translocoService.setActiveLang(currentLanguage);
    } else {
      let defaultLang = this.translocoService.getDefaultLang();
      localStorage.setItem("lang", defaultLang)
      this.translocoService.setDefaultLang(defaultLang);
    }
  }

  changeActiveLanguage(language: string): void {
    localStorage.setItem("lang", language)
    this.translocoService.setActiveLang(language);
  }

  checkIfLanguageAvailable(language: string) {
    return (this.getAvailableLanguages() as string[]).includes(language);
  }


}
