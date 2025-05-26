import { Component } from '@angular/core';
import { FACULTADES } from './mock-data';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.css'
})
export class AcordeonComponent {
  facultades = FACULTADES;
}
