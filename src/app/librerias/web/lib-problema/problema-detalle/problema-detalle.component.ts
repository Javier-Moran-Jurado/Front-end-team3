import {Component, OnInit} from '@angular/core';
import {Problema} from '../model/problema';
import {ProblemaService} from '../service/problema.service';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {ProblemaFormComponentModule} from '../problema-form.module';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-problema-detalle',
  templateUrl: './problema-detalle.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrl: './problema-detalle.component.css'
})
export class ProblemaDetalleComponent implements OnInit{
  problema?: Problema;
  constructor(private route: ActivatedRoute, private problemaService: ProblemaService, private sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit(): void {
    this.initProblema();
  }

  private initProblema(){
    const id = this.route.snapshot.paramMap.get('id');
    this.problemaService.getProblema(id).subscribe(data => this.problema = data.problema);
  }

  newLineToBr(line: string): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(line.replace(/\\n/g, '<br>'));
  }

  firstCase(line: string): SafeHtml{
    return this.sanitizer.bypassSecurityTrustHtml(line.split('\\n\\n')[0].replace(/\\n/g, '<br>'));
  }
}
