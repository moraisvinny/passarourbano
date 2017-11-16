import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import CarrinhoService from '../carrinho.service'
import { Oferta } from '../shared/oferta.model'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoService]
})
export class OfertaComponent implements OnInit {

  
  private oferta : Oferta
  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    
    console.log("ITEMS: ", this.carrinhoService.exibirItens())
    this.route.params.subscribe((parametros: Params) => {

      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
          
        })
    })
      
  }

  public adicionarItemCarrinho():void {
    this.carrinhoService.incluirItem(this.oferta)
  }  

}
