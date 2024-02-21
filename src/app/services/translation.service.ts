import { Injectable } from '@angular/core';
import {
  AvailableLangs,
  LangDefinition,
  TranslocoService,
} from '@ngneat/transloco';
import { Language } from '../models/language.model';
import { SUPPORTED_LANGUAGES } from '../models/supported-languages';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translocoService: TranslocoService) {}

  getLanguageChangesObservable$() {
    return this.translocoService.langChanges$;
  }

  getAvailableLanguages(): Language[] {
    return SUPPORTED_LANGUAGES;
  }

  getActiveLanguage(): Language {
    let activeLang = this.getAvailableLanguages().find(
      (lang) => lang.code === this.translocoService.getActiveLang()
    );
    if (!activeLang) {
      return this.getAvailableLanguages().find(
        (language) => language.code === this.translocoService.getDefaultLang()
      )!;
    }
    return activeLang;
  }

  setDefaultLanguage() {
    let currentLanguage = localStorage.getItem('lang');
    if (currentLanguage && this.checkIfLanguageAvailable(currentLanguage)) {
      this.translocoService.setActiveLang(currentLanguage);
    } else {
      let defaultLang = this.translocoService.getDefaultLang();
      localStorage.setItem('lang', defaultLang);
      this.translocoService.setDefaultLang(defaultLang);
    }
  }

  changeActiveLanguage(language: Language): void {
    localStorage.setItem('lang', language.code);
    this.translocoService.setActiveLang(language.code);
  }

  private checkIfLanguageAvailable(languageCode: string) {
    return (
      this.getAvailableLanguages().map((lang) => lang.code) as string[]
    ).includes(languageCode);
  }
}
