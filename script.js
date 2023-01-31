import { Produto } from "./poo.js";

let descricaoAdd;
let quantidadeAdd;
let valorAdd;
let p1;



let enviar = document.querySelector("#enviar").addEventListener('click', enviarDesc);

function enviarDesc(){
   descricaoAdd = document.querySelector("#inputDesc").value;
   quantidadeAdd = document.querySelector("#inputQuant").value;
   valorAdd = document.querySelector("#inputValor").value;
   
   p1 = new Produto(descricaoAdd, quantidadeAdd, valorAdd);
  console.log(p1);
  let c1 = document.querySelector("#c1").innerHTML = p1._descricao;
};
