let descricaoAdd;
let quantidadeAdd;
let valorAdd;
let p1;

class Produto{
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

let enviar = document.querySelector("#enviar").addEventListener('click', enviarDesc);

function enviarDesc(){
   descricaoAdd = document.querySelector("#inputDesc").value;
   quantidadeAdd = document.querySelector("#inputQuant").value;
   valorAdd = document.querySelector("#inputValor").value;
   
   p1 = new Produto(descricaoAdd, quantidadeAdd, valorAdd);
  console.log(p1);
};
