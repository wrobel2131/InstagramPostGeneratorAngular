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
}
