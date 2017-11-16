import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { Pedido } from './shared/pedido.model'
import { API_URL } from './app.api'

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) { }

    public efetivarCompra(pedido: Pedido): Observable<Number> {

        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')


        return this.http.post(
            `${API_URL}/pedidos`,
            pedido
        )
        .map((resposta: Pedido) => resposta.id )
    }
}