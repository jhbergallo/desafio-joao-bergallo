class Item{
    constructor(codigo, descricao, valor, isExtra, itemPrincipal){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
        this._isExtra = isExtra;
        this._itemPrincipal = itemPrincipal || null; //caso não tenha valor considera null
    }
    get codigo(){
        return this._codigo;
    }
    get valor(){
        return this._valor;
    }
    get isExtra(){
        return this._isExtra;
    }
    get itemPrincipal() {
        return this._itemPrincipal;
    }
}

export {Item};