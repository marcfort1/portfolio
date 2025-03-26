  import { Component } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';

  @Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss']
  })
  export class LanguageSelectorComponent {

    // Llista d'idiomes disponibles amb el codi, etiqueta i ruta de la imatge de la bandera
    languages = [
      { code: 'cat', label: 'Català', flag: 'assets/flags/ca.png' },
      { code: 'en', label: 'English', flag: 'assets/flags/en.png' },
      { code: 'es', label: 'Español', flag: 'assets/flags/es.png' }
    ];

    constructor(private translate: TranslateService) {
      // Afegeix els idiomes disponibles
      translate.addLangs(this.languages.map(lang => lang.code));
      // Defineix l'idioma per defecte
      translate.setDefaultLang('en');
      // Opcional: detecta l'idioma del navegador i l'utilitza si està disponible
      const browserLang = this.translate.getBrowserLang() || 'en';
      this.translate.use(this.languages.some(lang => lang.code === browserLang) ? browserLang : 'en');
      
    }

    // Mètode per canviar l'idioma quan es fa clic a una bandera
    changeLanguage(lang: string) {
      this.translate.use(lang);
    }
  }
