import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'meibit',
      role: 'meibit',
      duration: 'meibit',
      tasks: ['meibit.tasks']
    },
    {
      company: 'dxc_technology',
      role: 'dxc_technology',
      duration: 'dxc_technology',
      tasks: ['dxc_technology.tasks']
    },
    {
      company: 'bon_preu',
      role: 'bon_preu',
      duration: 'bon_preu',
      tasks: ['bon_preu.tasks']
    }
  ];
}
