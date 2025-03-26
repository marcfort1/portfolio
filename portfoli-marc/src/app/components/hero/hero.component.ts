import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  cvPath: string = '';
  cvFileName: string = '';

  constructor(private translate: TranslateService) {
    this.setCvPath();
    this.translate.onLangChange.subscribe(() => this.setCvPath());
  }

  setCvPath() {
    const lang = this.translate.currentLang || 'en'; // Idioma por defecto: inglés
    const cvFiles: { [key in 'cat' | 'es' | 'en']: string } = {
      cat: 'CVMarcFortCA.pdf',
      es: 'CVMarcFortES.pdf',
      en: 'CVMarcFortIN.pdf'
    };
  
    // Aseguramos que 'lang' sea uno de los keys válidos
    const langKey = lang as 'cat' | 'es' | 'en';
    this.cvFileName = cvFiles[langKey] || cvFiles['en']; // Si el idioma no está, usa inglés
    this.cvPath = `../../../assets/${this.cvFileName}`;
  }
}  
