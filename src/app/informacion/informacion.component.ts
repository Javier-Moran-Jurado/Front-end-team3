import { Component } from '@angular/core';

@Component({
  selector: 'app-infomacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  teams = {
    team1: [
      { name: 'NICOLAS', role: 'Scrum', img: 'assets/images/team1/nico.jpg' },
      { name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/images/team1/saavedra.jpg' },
      { name: 'JUANES', role: 'Developer', img: 'assets/images/team1/juanes.jpg' },
      { name: 'ARENAS', role: 'Developer', img: 'assets/images/team1/arenas.jpg' },
      { name: 'MORALES', role: 'UX/UI Designer', img: 'assets/images/team1/morales.jpg' },
    ],
    team2: [
      { name: 'VALENTINA', role: 'Scrum', img: 'assets/images/team2/valentina.jpg' },
      { name: 'CAMILO', role: 'Software Architect', img: 'assets/images/team2/camilo.jpg' },
      { name: 'STIVEN', role: 'Developer', img: 'assets/images/team2/stiven.jpg' },
      { name: 'GUEVARA', role: 'Developer', img: 'assets/images/team2/guevara.jpg' },
      { name: 'ANGELA', role: 'UX/UI Designer', img: 'assets/images/team2/angela.jpg' },
      { name: 'JAVIER', role: 'Project Manager', img: 'assets/images/team2/javier.jpg'}
    ],
    team3: [
      { name: 'NICONICONI', role: 'Scrum', img: 'assets/img/niconiconi.jpg' },
      { name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/img/saavedra.jpg' },
      { name: 'JUANES', role: 'Developer', img: 'assets/img/juanes.jpg' },
      { name: 'GUEVARA', role: 'Developer', img: 'assets/img/guevara.jpg' },
      { name: 'ESCOPETA', role: 'UX/UI Designer', img: 'assets/img/escopeta.jpg' },
      { name: 'JAVIER EDUARDO', role: 'Project Manager', img: 'assets/img/javier.jpg'}
    ],
    team4: [
      { name: 'NICONICONI', role: 'Scrum', img: 'assets/img/niconiconi.jpg' },
      { name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/img/saavedra.jpg' },
      { name: 'JUANES', role: 'Developer', img: 'assets/img/juanes.jpg' },
      { name: 'GUEVARA', role: 'Developer', img: 'assets/img/guevara.jpg' },
      { name: 'ESCOPETA', role: 'UX/UI Designer', img: 'assets/img/escopeta.jpg' },
      { name: 'JAVIER EDUARDO', role: 'Project Manager', img: 'assets/img/javier.jpg'}
    ],
    team5: [
      { name: 'NICONICONI', role: 'Scrum', img: 'assets/img/niconiconi.jpg' },
      { name: 'SAAVEDRA', role: 'Software Architect', img: 'assets/img/saavedra.jpg' },
      { name: 'JUANES', role: 'Developer', img: 'assets/img/juanes.jpg' },
      { name: 'GUEVARA', role: 'Developer', img: 'assets/img/guevara.jpg' },
      { name: 'ESCOPETA', role: 'UX/UI Designer', img: 'assets/img/escopeta.jpg' },
      { name: 'JAVIER EDUARDO', role: 'Project Manager', img: 'assets/img/javier.jpg'}
    ]
  };

  selectedTeam: string | null = null;


  get developers() {
    return this.teams[this.selectedTeam as keyof typeof this.teams];
  }

  selectTeam(team: string) {
    this.selectedTeam = team;
  }
}
