import { Produto } from "./poo.js";

let descricaoAdd;
let quantidadeAdd;
let valorAdd;
let p1;



let enviar = document.querySelector("#enviar").addEventListener('click', enviarDesc);

function enviarDesc(){
  event.preventDefault();
   descricaoAdd = document.querySelector("#inputDesc").value;
   quantidadeAdd = document.querySelector("#inputQuant").value;
   valorAdd = document.querySelector("#inputValor").value;
   
   p1 = new Produto(descricaoAdd, quantidadeAdd, valorAdd);
  console.log(p1);

    
  let d1 = document.querySelector("#d1");//.innerHTML = p1._descricao;
  let q1 = document.querySelector("#q1");//.innerHTML = p1._quantidade;
  let vu1 = document.querySelector("#vu");//.innerHTML = p1._valor;
  let vt = document.querySelector("#vt");//.innerHTML = p1.totalValor();
  let tb = document.querySelector("tbody").appendChild ()
};
