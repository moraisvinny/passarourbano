import { Oferta } from './shared/oferta.model'
import {Injectable} from '@angular/core'
import { Http } from '@angular/http'
import { API_URL } from './app.api'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

    constructor(private http: Http){}

    public getOfertas(): Promise<Oferta[]> {
        
        return this.http.get(`${API_URL}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
        
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${API_URL}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${API_URL}/ofertas?id=${id}`)
            .toPromise().then((resposta) => {return resposta.json().shift()})
    }

    public getComoUsarOfertaPorId(id: number): Promise<String> {
        return this.http.get(`${API_URL}/como-usar?id=${id}`)
            .toPromise().then((resposta) => {return resposta.json()[0].descricao})
    }
    

}