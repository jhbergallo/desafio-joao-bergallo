import {Item} from './item.js';


class Cardapio{
    constructor(){
        const cafe = new Item("cafe", "Café", 3.00, false);
        const chantily = new Item("chantily", "Chantily (extra do Café)", 1.50, true, "cafe");
        const suco = new Item("suco", "Suco Natural", 6.20, false);
        const sanduiche = new Item("sanduiche", "Sanduíche", 6.50, false);
        const queijo = new Item("queijo", "Queijo (extra do Sanduíche)", 2.00, true, "sanduiche");
        const salgado = new Item("salgado", "Salgado", 7.25, false);
        // const combo1 = new Combo("combo1", "1 Suco e 1 Sanduíche", suco, sanduiche, 9.50);
        // const combo2 = new Combo("combo2", "1 Café e 1 Sanduíche", cafe, sanduiche, 7.50);
        this._cardapio = [cafe, chantily, suco, sanduiche, queijo, salgado];

        
    }

    get cardapio(){
        return this._cardapio;
    }
    
    // get combos(){
    //     return this._combos;
    // }
    
    // get combo1(){
    //     return this.combo1;
    // }

    // get combo2(){
    //     return this.combo2;
    // }
}

export{Cardapio};