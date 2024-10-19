/*---------------REGION---------------*/

var input_BRglobal = document.getElementById("BRglobal");
var input_BRargentina = document.getElementById("BRargentina");
var input_BReuropa = document.getElementById("BReuropa");
var input_BRlatino = document.getElementById("BRlatino");

console.log(input_BRglobal);
console.log(input_BRargentina);
console.log(input_BReuropa);
console.log(input_BRlatino);

/*---------------GLOBAL---------------*/

input_BRglobal.addEventListener('click', seleccionadoGlobal);

function seleccionadoGlobal(event) {
  event.preventDefault();

  elemento_seleccionado1 = document.getElementById('BRglobal');
  elemento_seleccionado2 = document.getElementById('BRargentina');
  elemento_seleccionado3 = document.getElementById('BReuropa');
  elemento_seleccionado4 = document.getElementById('BRlatino');
  elemento_seleccionado1.classList.add('seleccionado');
  elemento_seleccionado2.classList.remove('seleccionado');
  elemento_seleccionado3.classList.remove('seleccionado');
  elemento_seleccionado4.classList.remove('seleccionado');
}

/*---------------ARGENTINA---------------*/

input_BRargentina.addEventListener('click', seleccionadoArgentina);

function seleccionadoArgentina(event) {
  event.preventDefault();

  elemento_seleccionado1 = document.getElementById('BRglobal');
  elemento_seleccionado2 = document.getElementById('BRargentina');
  elemento_seleccionado3 = document.getElementById('BReuropa');
  elemento_seleccionado4 = document.getElementById('BRlatino');
  elemento_seleccionado1.classList.remove('seleccionado');
  elemento_seleccionado2.classList.add('seleccionado');
  elemento_seleccionado3.classList.remove('seleccionado');
  elemento_seleccionado4.classList.remove('seleccionado');
}

/*-------------------------EPOCA-------------------------*/

var input_BRglobalE = document.getElementById("BRglobalE");
var input_BR70s = document.getElementById("BR70s");
var input_BR80s = document.getElementById("BR80s");
var input_BR90s = document.getElementById("BR90s");
var input_BR00s = document.getElementById("BR00s");
var input_BR10s = document.getElementById("BR10s");
var input_BRactual = document.getElementById("BRactual");

console.log(input_BRglobalE);
console.log(input_BR70s);
console.log(input_BR80s);
console.log(input_BR90s);
console.log(input_BR00s);
console.log(input_BR10s);
console.log(input_BRactual);

/*---------------ACTUAL---------------*/

input_BRactual.addEventListener('click', seleccionadoActual);

function seleccionadoActual(event) {
  event.preventDefault();

  elemento_seleccionado1 = document.getElementById('BRglobalE');
  elemento_seleccionado2 = document.getElementById('BR70s');
  elemento_seleccionado3 = document.getElementById('BR80s');
  elemento_seleccionado4 = document.getElementById('BR90s');
  elemento_seleccionado5 = document.getElementById('BR00s');
  elemento_seleccionado6 = document.getElementById('BR10s');
  elemento_seleccionado7 = document.getElementById('BRactual');
  elemento_seleccionado1.classList.remove('seleccionado');
  elemento_seleccionado2.classList.remove('seleccionado');
  elemento_seleccionado3.classList.remove('seleccionado');
  elemento_seleccionado4.classList.remove('seleccionado');
  elemento_seleccionado5.classList.remove('seleccionado');
  elemento_seleccionado6.classList.remove('seleccionado');
  elemento_seleccionado7.classList.add('seleccionado');
}

/*---------------00S---------------*/

input_BR00s.addEventListener('click', seleccionado00s);

function seleccionado00s(event) {
  event.preventDefault();

  elemento_seleccionado1 = document.getElementById('BRglobalE');
  elemento_seleccionado2 = document.getElementById('BR70s');
  elemento_seleccionado3 = document.getElementById('BR80s');
  elemento_seleccionado4 = document.getElementById('BR90s');
  elemento_seleccionado5 = document.getElementById('BR00s');
  elemento_seleccionado6 = document.getElementById('BR10s');
  elemento_seleccionado7 = document.getElementById('BRactual');
  elemento_seleccionado1.classList.remove('seleccionado');
  elemento_seleccionado2.classList.remove('seleccionado');
  elemento_seleccionado3.classList.remove('seleccionado');
  elemento_seleccionado4.classList.remove('seleccionado');
  elemento_seleccionado5.classList.add('seleccionado');
  elemento_seleccionado6.classList.remove('seleccionado');
  elemento_seleccionado7.classList.remove('seleccionado');
}