var nome = "Robert P Rodrigues";
var cargo = "desenvolvedor";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarnomenohtml(nome) {
nomehtml.innerHTML = nome;
}

function colocarcargonohtml(cargo) {
    cargohtml.innerHTML = cargo;
}

function logarnome() {
    console.log(nome);
}

function clicknoProjetos() {
    console.log("clicou no botão Projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clicknoSobre() {

    console.log("clicou no botão Sobre");
    texto2.style.display = "none";
    texto1.style.display = "block";
}

colocarnomenohtml(nome);
colocarcargonohtml(cargo);
