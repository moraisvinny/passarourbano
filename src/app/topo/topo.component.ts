import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

import '../util/rxjs-extensions'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {
        console.log("Executei o subject")
        if(termo.trim() === '') {
          return Observable.of<Oferta[]>([])
        }
        return this.ofertasService.pesquisarOfertas(termo)
      })
      .catch((erro: any) =>{
        console.log(erro)
        return Observable.of<Oferta[]>([])
      })
  }
  pesquisar(valor: string): void {

      this.subjectPesquisa.next(valor)
    
  }

  limparPesquisa() : void {
    
    this.subjectPesquisa.next('')
  }


}
