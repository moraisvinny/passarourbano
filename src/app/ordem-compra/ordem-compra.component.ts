import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { NgForm } from '@angular/forms'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario')
  public formulario: NgForm
  
  public idOrdemCompra: number
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra() : void {
    let valores  = this.formulario.value
    let pedido: Pedido = new Pedido(
      valores.endereco, 
      valores.numero,
      valores.complemento,
      valores.formaPagamento, 
      null)

      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number)=>{this.idOrdemCompra = idPedido})
  }
}
