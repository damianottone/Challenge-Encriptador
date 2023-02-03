var btn = document.querySelector("#btnEncriptar");
btn.onclick = encriptar;

var btn2 = document.querySelector("#btnDesencriptar");
btn2.onclick = desencriptar;

var btn3 = document.querySelector("#btnCopiar");
btn3.onclick = copiar;

var munieco = document.querySelector(".contenedor-img");
var h3 = document.querySelector(".contenedor-subtitulo");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".contenedor-resultado");

function encriptar(){
    ocultarFrente();

    var frase = document.getElementById("textoInicial").value.toLowerCase();

    var textoInicial = frase.replace(/e/img, "enter");
    var textoInicial = textoInicial.replace(/i/img, "imes");
    var textoInicial = textoInicial.replace(/a/img, "ai");
    var textoInicial = textoInicial.replace(/o/img, "ober");
    var textoInicial = textoInicial.replace(/u/img, "ufat");

    document.getElementById("textoFinal").innerHTML = textoInicial;

}
function desencriptar(){
    
    var frase = document.getElementById("textoInicial").value.toLowerCase();

    var textoInicial = frase.replace(/enter/img, "e");
    var textoInicial = textoInicial.replace(/imes/img, "i");
    var textoInicial = textoInicial.replace(/ai/img, "a");
    var textoInicial = textoInicial.replace(/ober/img, "o");
    var textoInicial = textoInicial.replace(/ufat/img, "u");

    document.getElementById("textoFinal").innerHTML = textoInicial;
}

function copiar(){
    var contenido = document.querySelector("#textoFinal");
    contenido.select();
    document.execCommand("copy");
}
function ocultarFrente(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}