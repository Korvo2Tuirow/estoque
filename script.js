import { Produto } from "./poo.js";

let descricaoAdd, quantidadeAdd, valorAdd, p1, d1, q1, vu1,vt;

document.querySelector("#enviar").addEventListener("click", enviarDesc);

function enviarDesc() {
 // preventDefault();
  descricaoAdd = document.querySelector("#inputDesc").value;
  quantidadeAdd = document.querySelector("#inputQuant").value;
  valorAdd = document.querySelector("#inputValor").value;

  new Produto(descricaoAdd, quantidadeAdd, valorAdd);

  d1 = document.querySelector("#d1").innerHTML = p1._descricao;
  q1 = document.querySelector("#q1").innerHTML = p1._quantidade;
  vu1 = document.querySelector("#vu").innerHTML = p1._valor;
  vt = document.querySelector("#vt").innerHTML = p1._valorTotal;
  console.log(p1);


};

