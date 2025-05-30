import {Component, OnInit} from '@angular/core';
import { FACULTADES } from './mock-data';
import {Router} from '@angular/router';
import {Ova} from '../../ova/model/ova';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.css'
})
export class AcordeonComponent implements OnInit {
  constructor(private router: Router) {
  }navegar(path: string){this.router.navigate([path]);}
  ngOnInit(): void {
  }
  facultades = FACULTADES;
  protected readonly Ova = Ova;
}
