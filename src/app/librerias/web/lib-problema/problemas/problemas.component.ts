// problemas.component.ts
import { Component, OnInit } from '@angular/core';
import { ProblemaService } from '../service/problema.service';
import { CommonModule } from '@angular/common';
import {Problema} from '../model/problema';
import {Router} from '@angular/router';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./problemas.component.css']
})
export class ProblemasComponent implements OnInit {
  problemasArr: { problemas: Problema[]} = {problemas: []};

  constructor(
    private problemaService: ProblemaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProblemaes();
  }

  private loadProblemaes(): void {
    this.problemaService.getProblemas().subscribe(
      (data) => {
        this.problemasArr = data;
      });
  }

  goToDetails(id: number | undefined) {
    this.router.navigate(['/problema', id]);
  }
}
