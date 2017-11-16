import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean  = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean  = true

  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  public setEndereco(endereco: string) : void {
    this.endereco = endereco
    this.enderecoEstadoPrimitivo = false

    this.enderecoValido = this.endereco.length > 3
    this.habilitaForm()

  }

  public setNumero(numero: string) : void {
    this.numero = numero
    this.numeroEstadoPrimitivo = false
    this.numeroValido = this.numero != ''
    this.habilitaForm()
  } 

  public setComplemento(compelemento: string) : void {
    this.complemento = compelemento
    this.complementoEstadoPrimitivo = false
    this.complementoValido = this.complemento != ''
    this.habilitaForm()
  }

  public setFormaPagamento(formaPagamento: string) : void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoEstadoPrimitivo = false
    this.formaPagamentoValido  = formaPagamento !== ''
    this.habilitaForm()
  }

  public habilitaForm(): void {
    if(this.enderecoValido && this.numeroValido && this.formaPagamentoValido) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  public confirmarCompra() {
    var pedido: Pedido = new Pedido(this.endereco, this.numero,this.complemento, this.formaPagamento)
    this.ordemCompraService.efetivarCompra(pedido)
  }
}
