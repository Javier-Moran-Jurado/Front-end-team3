import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-infomacion',
  templateUrl: './informacion.component.html',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgIf,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  teams = {
    team1: [
      {name: 'NICONICONI', role: 'Scrum', img: 'assets/img/niconiconi.jpg'},
      {name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/img/saavedra.jpg'},
      {name: 'JUANES', role: 'Developer', img: 'assets/img/juanes.jpg'},
      {name: 'GUEVARA', role: 'Developer', img: 'assets/img/guevara.jpg'},
      {name: 'ESCOPETA', role: 'UX/UI Designer', img: 'assets/img/escopeta.jpg'},
      {name: 'JAVIER EDUARDO', role: 'Project Manager', img: 'assets/img/javier.jpg'}
    ],

    team2: [
      {name: 'NICOLAS', role: 'Scrum', img: 'assets/images/team2/nico.jpg'},
      {name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/images/team2/saavedra.jpg'},
      {name: 'JUANES', role: 'Developer', img: 'assets/images/team2/juanes.jpg'},
      {name: 'ARENAS', role: 'Developer', img: 'assets/images/team2/arenas.jpg'},
      {name: 'MORALES', role: 'UX/UI Designer', img: 'assets/images/team2/morales.jpg'},
    ],
    team3: [
      {name: 'VALENTINA', role: 'Scrum', img: 'assets/images/team3/valentina.jpg'},
      {name: 'CAMILO', role: 'Software Architect', img: 'assets/images/team3/camilo.jpg'},
      {name: 'STIVEN', role: 'Developer', img: 'assets/images/team3/stiven.jpg'},
      {name: 'GUEVARA', role: 'Developer', img: 'assets/images/team3/guevara.jpg'},
      {name: 'ANGELA', role: 'UX/UI Designer', img: 'assets/images/team3/angela.jpg'},
      {name: 'JAVIER', role: 'Project Manager', img: 'assets/images/team3/javier.jpg'}
    ],

    team4: [
      {name: 'NICONICONI', role: 'Scrum', img: 'assets/img/niconiconi.jpg'},
      {name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/img/saavedra.jpg'},
      {name: 'JUANES', role: 'Developer', img: 'assets/img/juanes.jpg'},
      {name: 'GUEVARA', role: 'Developer', img: 'assets/img/guevara.jpg'},
      {name: 'ESCOPETA', role: 'UX/UI Designer', img: 'assets/img/escopeta.jpg'},
      {name: 'JAVIER EDUARDO', role: 'Project Manager', img: 'assets/img/javier.jpg'}
    ],
    team5: [
      {name: 'NICONICONI', role: 'Scrum', img: 'assets/img/niconiconi.jpg'},
      {name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/img/saavedra.jpg'},
      {name: 'JUANES', role: 'Developer', img: 'assets/img/juanes.jpg'},
      {name: 'GUEVARA', role: 'Developer', img: 'assets/img/guevara.jpg'},
      {name: 'ESCOPETA', role: 'UX/UI Designer', img: 'assets/img/escopeta.jpg'},
      {name: 'JAVIER EDUARDO', role: 'Project Manager', img: 'assets/img/javier.jpg'}
    ],

  };
  professors = [
    {name: 'ALVARO HERNANDO SALAZAR VICTORIA', img: 'assets/images/profesor/alvaro.jpg'},
    {name: 'FABIAN CERQUERA MUNOZ', img: 'assets/images/profesor/cerquera.jpeg'},
    {name: 'EFRAIN VASQUEZ MILLAN', img: 'assets/images/profesor/efrain.jpg'},
    {name: 'ANDRES FERNANDO VELASCO', img: 'assets/images/profesor/velasco.jpg'},
    {name: 'HAROLD MAURICIO LOPEZ SEPULVEDA', img: 'assets/images/profesor/profesor.jpg'},

  ]

  selectedTeam: string | null = null;
  teamKeys = ['team1', 'team2', 'team3', 'team4', 'team5'];

  get developers() {
    return this.selectedTeam ? this.teams[this.selectedTeam as keyof typeof this.teams] : [];
  }

  selectTeam(team: string) {
    this.selectedTeam = team;
  }

  resetView() {
    this.selectedTeam = null;
  }
};
