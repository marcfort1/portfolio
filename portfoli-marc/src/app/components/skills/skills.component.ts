import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

interface Skill {
  name: string;
  key: string;
  image: string;
  level: number;
  category: string;
  animatedLevel?: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

  skills: Skill[] = [
    { name: 'Angular', key: 'angular', image: '../../../assets/angular.png', level: 90, category: 'Frontend' },
    { name: 'TypeScript', key: 'typescript', image: '../../../assets/ts.png', level: 85, category: 'Frontend' },
    { name: 'HTML', key: 'html', image: '../../../assets/html.png', level: 95, category: 'Frontend' },
    { name: 'CSS / SCSS', key: 'css', image: '../../../assets/css.png', level: 90, category: 'Frontend' },
    { name: 'JavaScript', key: 'javascript', image: '../../../assets/js.png', level: 85, category: 'Frontend' },

    { name: 'C# / .NET', key: 'csharp', image: '../../../assets/c.png', level: 80, category: 'Backend' },
    { name: 'Node.js', key: 'node', image: '../../../assets/node.png', level: 70, category: 'Backend' },
    { name: 'REST API', key: 'rest', image: '../../../assets/api.png', level: 90, category: 'Backend' },

    { name: 'SQL Server', key: 'sql_server', image: '../../../assets/sql_server.png', level: 85, category: 'Bases de datos' },
    { name: 'MySQL / MariaDB', key: 'mysql', image: '../../../assets/mysql.png', level: 75, category: 'Bases de datos' },

    { name: 'Docker', key: 'docker', image: '../../../assets/docker.png', level: 60, category: 'DevOps' },
    { name: 'GitHub', key: 'github', image: '../../../assets/github2.png', level: 90, category: 'DevOps' },
    { name: 'Visual Studio', key: 'visual_studio', image: '../../../assets/vs.png', level: 90, category: 'DevOps' },
    { name: 'VS Code', key: 'visual_studio_code', image: '../../../assets/vsc.png', level: 95, category: 'DevOps' },
  ];

  categories: string[] = ['Frontend', 'Backend', 'Bases de datos', 'DevOps'];

  ngAfterViewInit(): void {
    // pequeña espera para asegurar que ViewChildren esté poblado
    setTimeout(() => this.animateSkills(), 50);
  }

  animateSkills() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const key = (entry.target as HTMLElement).getAttribute('data-key');
          if (key) this.startCountByKey(key);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    this.skillCards.forEach(el => {
      // el elemento ya tiene data-key por el HTML
      observer.observe(el.nativeElement);
    });
  }

  startCountByKey(skillKey: string) {
    const skill = this.skills.find(s => s.key === skillKey);
    if (!skill) return;

    // evita reiniciar si ya está animada
    if (skill.animatedLevel && skill.animatedLevel >= skill.level) return;

    skill.animatedLevel = 0;
    const step = Math.ceil(skill.level / 50);
    const interval = setInterval(() => {
      if (skill.animatedLevel! < skill.level) {
        skill.animatedLevel! += step;
        if (skill.animatedLevel! > skill.level) skill.animatedLevel = skill.level;
      } else {
        clearInterval(interval);
      }
    }, 18);
  }
}
