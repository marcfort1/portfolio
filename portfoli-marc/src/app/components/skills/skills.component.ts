import { Component } from '@angular/core';

interface Skill {
  name: string;
  key: string;
  image: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', key: 'angular', image: '../../../assets/angular.png' },
    { name: 'HTML', key: 'html', image: '../../../assets/html.png' },
    { name: 'CSS', key: 'css', image: '../../../assets/css.png' },
    { name: 'JavaScript', key: 'javascript', image: '../../../assets/js.png' },
    { name: 'C#', key: 'c#', image: '../../../assets/c.png' },
    { name: 'SQL Server', key: 'sql_server', image: '../../../assets/sql_server.png' },
    { name: 'MySQL', key: 'mysql', image: '../../../assets/mysql.png' },
    { name: 'Docker', key: 'docker', image: '../../../assets/docker.png' },
    { name: 'GitHub', key: 'github', image: '../../../assets/github2.png' },
    { name: 'Visual Studio', key: 'visual_studio', image: '../../../assets/vs.png' },
    { name: 'Visual Studio Code', key: 'visual_studio_code', image: '../../../assets/vsc.png' },
    { name: 'Node', key: 'node', image: '../../../assets/node.png' }
  ];
}
