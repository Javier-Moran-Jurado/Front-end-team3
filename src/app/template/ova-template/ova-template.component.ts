import { Component } from '@angular/core';
import {AppModule} from '../../app.module';
import {AcordeonComponent} from '../acordeon/acordeon.component';

@Component({
  selector: 'app-ova-template',
  templateUrl: './ova-template.component.html',
  standalone: true,
  imports: [
    AppModule,
    AcordeonComponent
  ],
  styleUrl: './ova-template.component.css'
})
export class OvaTemplateComponent {

}
