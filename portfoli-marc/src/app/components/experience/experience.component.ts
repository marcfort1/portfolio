import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface DisplayExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  tasks: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {

  private experienceIds = ['meibit', 'dxc_technology', 'bon_preu'];
  displayExperiences: DisplayExperience[] = [];

  @ViewChildren('timelineContent', { read: ElementRef }) timelineContents!: QueryList<ElementRef>;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadExperiences();
    this.translate.onLangChange.subscribe(() => this.loadExperiences());
  }

  ngAfterViewInit(): void {
    // espera a que ViewChildren esté poblado
    setTimeout(() => this.observeTimelineItems(), 50);
  }

  private loadExperiences() {
    this.displayExperiences = [];
    this.experienceIds.forEach(id => {
      const key = `experience.experiences.${id}`;
      this.translate.get(key).subscribe((obj: any) => {
        const display: DisplayExperience = {
          id,
          company: obj.company || '',
          role: obj.role || '',
          duration: obj.duration || '',
          tasks: Array.isArray(obj.tasks) ? obj.tasks : []
        };
        this.displayExperiences.push(display);
        this.displayExperiences.sort((a,b) => this.experienceIds.indexOf(a.id) - this.experienceIds.indexOf(b.id));
      });
    });
  }

  private observeTimelineItems() {
    const elements = this.timelineContents.toArray();
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          // aplicamos un delay basado en su índice para cascada
          const idx = elements.findIndex(e => e.nativeElement === el);
          const delay = (idx >= 0 ? idx * 0.08 : 0) + 's';
          el.style.transitionDelay = delay;
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(e => observer.observe(e.nativeElement));
  }
}
