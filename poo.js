export class Produto{
    constructor(descricao, quantidade, valor, valorTotal){
      this._descricao = descricao;
      this._quantidade = quantidade;
      this._valor = valor;
      this._valorTotal = this._quantidade * this._valor;
    };
    
    set (descricao, quantidade, valor){
      return this._descricao = descricao,
             this._quantidade = quantidade,
             this._valor = this._quantidade * this._valor;
    };
    totalValor(){
      return (this._quantidade * this._valor).toFixed(2);
    }
    
  };

