import { Component } from '@angular/core';
import { FACULTADES } from './mock-data';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './acordeon.component.css'
})
export class AcordeonComponent {
  facultades = FACULTADES;
}
