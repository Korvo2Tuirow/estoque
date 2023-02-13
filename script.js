import { Produto } from "./poo.js";

document.querySelector("#enviar").addEventListener("click", enviarDesc);

function enviarDesc() {

    let descValue = document.querySelector("#inputDesc").value;
    let quantValue = document.querySelector("#inputQuant").value;
    let valorValue = document.querySelector("#inputValor").value;

   if(descValue == "" || quantValue == "" || valorValue == ""){
        alert("PREENCHA OS CAMPOS ABAIXO");
    
    }else{
          
    console.log(descValue);
    console.log(quantValue);
    console.log(valorValue);

    document.querySelector(".descValue").innerHTML = descValue;
    document.querySelector(".quantValue").innerHTML = quantValue;
    document.querySelector(".valorValue").innerHTML = `R$ ${valorValue}`;
    document.querySelector(".totalValue").innerHTML = `R$ ${(quantValue * valorValue).toFixed(2)}`;

    document.querySelector(".tabela").style.display = "flex";

    };

};

