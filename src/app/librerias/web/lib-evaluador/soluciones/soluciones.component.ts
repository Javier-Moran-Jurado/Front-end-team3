import {Component, OnInit} from '@angular/core';
import {Problema} from '../../lib-problema/model/problema';
import {ProblemaService} from '../../lib-problema/service/problema.service';
import {NavigationExtras, Router} from '@angular/router';
import { faUserPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-problemaes',
  templateUrl: './problemas.component.html',
  imports: [
    NgForOf
  ],
  standalone: true,
  styleUrl: './problemas.component.css'
})
export class ProblemasComponent implements OnInit {
  problemaArr: {problemas: Problema[]} = {problemas:[]};
  faEdit = faEdit;
  faTrash = faTrash;
  faUserPlus = faUserPlus;

  constructor(
    private problemaService: ProblemaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProblemas()
  }

  private loadProblemas() {
    this.problemaService.getProblemas().subscribe(data => this.problemaArr = data);
  }

  goToDetails(id: number | undefined) {
    this.router.navigate([`/problema/${id}`]);
  }
}
