import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList = [
    { title: 'cfgs_desarrollament_multiplataforma', period: 'cfgs_desarrollament_multiplataforma' },
    { title: 'cfgs_desarrollament_web', period: 'cfgs_desarrollament_web' },
    { title: 'cfgm_sistemes_microinformatiques', period: 'cfgm_sistemes_microinformatiques' },
    { title: 'eso', period: 'eso' }
  ];
}
