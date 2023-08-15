class Combo{
    constructor(codigo, descricao, itens, valor){
        this._codigo = codigo;
        this._descricao = descricao;
        this._itens = itens;
        this._valor = valor;
    }
    get valor(){
        return this._valor;
    }
    get codigo(){
        return this._codigo;
    }
    get itens(){
        return this._itens;
    }
}

export{Combo};