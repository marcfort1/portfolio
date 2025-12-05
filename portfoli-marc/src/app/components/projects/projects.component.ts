import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface RawProject {
  // la estructura en los JSON: title, short, description(array), tech(array), date, image (opcional), link (opcional)
  title?: string;
  short?: string;
  description?: string[];
  tech?: string[];
  type?: string;
  image?: string;
  link?: string;
}

interface DisplayProject {
  id: string;
  title: string;
  short: string;
  description: string[];
  tech: string[];
  type?: string;
  image?: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // ids que coinciden con las claves en los JSON
  private projectIds = [
    'wpf_db',
    'vue_php_shop',
    'android_forms_firebase',
    'logistics_erp',
    'quercus_camera',
    'vehicle_registry',
    'image_card_service',
    'sync_factorialapi'
  ];

  projects: DisplayProject[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadProjects();
    // recarga si el usuario cambia idioma en tiempo real
    this.translate.onLangChange.subscribe(() => this.loadProjects());
  }

  private loadProjects() {
    this.projects = [];
    this.projectIds.forEach(id => {
      const key = `projects.items.${id}`;
      this.translate.get(key).subscribe((obj: RawProject) => {
        // fallback por si alguna clave falta
        const p: DisplayProject = {
          id,
          title: obj?.title || '',
          short: obj?.short || '',
          description: Array.isArray(obj?.description) ? obj!.description : (obj?.description ? [obj.description] : []),
          tech: Array.isArray(obj?.tech) ? obj!.tech : (obj?.tech ? [obj.tech] : []),
          type: obj?.type,
          image: obj?.image,
          link: obj?.link
        };
        this.projects.push(p);
        // mantener orden original
        this.projects.sort((a,b) => this.projectIds.indexOf(a.id) - this.projectIds.indexOf(b.id));
      });
    });
  }
}
