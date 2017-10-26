import { Oferta } from './shared/oferta.model'
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Response } from '@angular/http'
import { API_URL } from './app.api'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class OfertasService {

    constructor(private http: Http){}

    public getOfertas(): Promise<Oferta[]> {
        
        return this.http.get(`${API_URL}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
        
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${API_URL}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${API_URL}/ofertas?id=${id}`)
            .toPromise().then((resposta: Response) => {return resposta.json().shift()})
    }

    public getComoUsarOfertaPorId(id: number): Promise<String> {
        return this.http.get(`${API_URL}/como-usar?id=${id}`)
            .toPromise().then((resposta: Response) => {return resposta.json()[0].descricao})
    }

    public getOndeFicaOfertaPorId(id: number): Promise<String> {
        return this.http.get(`${API_URL}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: Response) => { return resposta.json()[0].descricao})
    }

    public pesquisarOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${API_URL}/ofertas?descricao_oferta_like=${termo}`)
            .map((resposta: Response) => resposta.json())
    }
    

}