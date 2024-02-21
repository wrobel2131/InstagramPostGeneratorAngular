import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { TranslationService } from '../../services/translation.service';
import { AvailableLangs } from '@ngneat/transloco';

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
export class PickLanguageMenuComponent implements OnInit{
  constructor(private translationService: TranslationService) {

  }

  languages!: AvailableLangs;

  selected!: string;

  ngOnInit(): void {
    this.languages = this.translationService.getAvailableLanguages();
    this.selected = this.translationService.getActiveLanguage();
  }

  

  changeLang(event: MatSelectChange) {
    this.translationService.changeActiveLanguage(event.value)
    console.log(this.translationService.getActiveLanguage())
    // console.log(event)
  }

 
}
