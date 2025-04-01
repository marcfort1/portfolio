import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  languages = [
    { code: 'cat', label: 'Català', flag: 'assets/flags/ca.png' },
    { code: 'en', label: 'English', flag: 'assets/flags/en.png' },
    { code: 'es', label: 'Español', flag: 'assets/flags/es.png' }
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages.map(lang => lang.code));
    translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(this.languages.some(lang => lang.code === browserLang) ? browserLang : 'en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
