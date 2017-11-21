import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model'
export class CarrinhoService {

    public itens: ItemCarrinho[] = []

    public exibirItens():ItemCarrinho[] {
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
    
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0], 
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor, 
            1
        )
        let itemEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if(itemEncontrado) {
            itemEncontrado.quantidade += 1
        } else {

            this.itens.push(itemCarrinho)
        }
    }

    public incluirItemCarrinho(itemParametro: ItemCarrinho): void {

        let itemEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemParametro.id)
        if(itemEncontrado) {
            itemEncontrado.quantidade += 1
        } else {

            this.itens.push(itemParametro)
        }
    }

    public removerItemCarrinho(itemParametro: ItemCarrinho) {

        let itemEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemParametro.id)

        if(itemEncontrado) {
            itemEncontrado.quantidade -= 1
            
            if (itemEncontrado.quantidade <= 0) {
                let index = this.itens.indexOf(itemEncontrado)
                this.itens.splice(index, 1)
            }
        } 
    }

    public totalCarrinhoCompras(): number {
        
        let total: number = 0

        this.itens.forEach((item: ItemCarrinho) =>{
            total = total + (item.valor * item.quantidade)
        })

        return total
    }

    public limparCarrinho(): void {
        this.itens = []
    }
    
}