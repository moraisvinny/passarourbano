import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  
  private oferta : Oferta
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    //console.log("parametros => "+this.route.snapshot.params.id)
    this.ofertasService.getOfertaPorId(this.route.snapshot.params.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta
        //console.log(this.oferta)
      })
      /**
      let meuObservableTeste = Observable.create((observer: Observer<String>) => {
          observer.next("TESTE OBSERVABLE")
          observer.complete() 
      })

      meuObservableTeste.subscribe(
        (resultado: any) => console.log(resultado),
        (erro: any) => console.log(erro),
        () => console.log("Stream finalizada")
      )  */
  }

}
