let descricaoAdd;
let valorAdd;
let quantAdd;

let enviar = document.querySelector("#enviar").addEventListener('click', enviarDesc);

function enviarDesc(){
   descricaoAdd = document.querySelector("#inputDesc").value;
   valorAdd = document.querySelector("#inputValor").value;
   quantAdd = document.querySelector("#inputQuant").value;
   alert(descricaoAdd + valorAdd + quantAdd);
};
