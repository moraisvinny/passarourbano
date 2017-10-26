import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa.switchMap((termo: string) => {
      console.log("Executei o subject")
      return this.ofertasService.pesquisarOfertas(termo)
    })

    this.subjectPesquisa.subscribe({next: (ofertas: string) => console.log(ofertas)})
    this.ofertas.subscribe({next: (ofertas: Oferta[]) => console.log(ofertas)})
    
  }
  pesquisar(valor: string): void {
    
    this.subjectPesquisa.next(valor)
  }

}
