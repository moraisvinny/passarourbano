import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
  }
  pesquisar(valor: string): void {
    
    this.ofertas = this.ofertasService.pesquisarOfertas(valor)
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas)
    )
  }

}
