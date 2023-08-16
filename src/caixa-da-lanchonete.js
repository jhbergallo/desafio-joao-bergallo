import {Cardapio} from './cardapio.js';
//
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const listaCardapio = new Cardapio();
        const cardapio = listaCardapio.cardapio;

        let valorTotal = 0.00;
        const itensPrincipais = {};
    

        if(itens.length == 0){
            return "Não há itens no carrinho de compra!";
        }
        
        for(const item of itens){
            const[it, qtdStr] = item.split(",").map(str => str.trim());
            const quantidade = parseInt(qtdStr);
            if(quantidade <= 0){
                return "Quantidade inválida!";
            }
            const item1 = cardapio.find(c => c.codigo === it); //procura o código do item no cardápio
            if(!item1) {
                return "Item inválido!";
            }
            if(item1.isExtra) {
                const principal = item1.itemPrincipal;
                if(!itensPrincipais[principal]) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
            
            itensPrincipais[it] = true;
            valorTotal += quantidade * parseFloat(item1.valor);
        }
        
        if(metodoDePagamento == "credito"){
            valorTotal+= valorTotal * (3/100);
            return "R$ " + valorTotal.toFixed(2).replace(".", ",");
        } else if(metodoDePagamento == "dinheiro"){
            valorTotal-= valorTotal * (5/100);
            return "R$ " + valorTotal.toFixed(2).replace(".", ",");
        } else if(metodoDePagamento == "debito"){
            return "R$ " + valorTotal.toFixed(2).replace(".", ",");
        } else{
            return "Forma de pagamento inválida!";
        }
    }
}




export { CaixaDaLanchonete };
