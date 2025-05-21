import { Component } from '@angular/core';
import { FACULTADES } from './mock-data';

@Component({
  selector: 'app-home-ova',
  templateUrl: './home-ova.component.html',
  styleUrls: ['./home-ova.component.css']
})
export class HomeOvaComponent {
  facultades = FACULTADES;

  // Genera IDs únicos para los acordeones
  generateId(prefix: string, ...ids: number[]): string {
    return `${prefix}-${ids.join('-')}`;
  }

  protected readonly Number = Number;
}
