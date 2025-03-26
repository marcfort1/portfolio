import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface NavLink {
  title: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  nav: boolean = false;

  navLinks: NavLink[] = [
    { title: "Home", path: "#hero" },
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#experience" },
    { title: "Services", path: "#education" },
    { title: "Contact", path: "#contact" },
  ];

  languages = [
    { code: 'cat', label: 'Català', flag: 'assets/flags/ca.png' },
    { code: 'en', label: 'English', flag: 'assets/flags/en.png' },
    { code: 'es', label: 'Español', flag: 'assets/flags/es.png' }
  ];

  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages.map(lang => lang.code));
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang() || 'en';
    translate.use(this.languages.some(lang => lang.code === browserLang) ? browserLang : 'en');
  }

  toggleNav(): void {
    this.nav = !this.nav;
  }

  closeNav(): void {
    this.nav = false;
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
