/*---------------DESPLEGABLE---------------*/

const region = document.querySelector(".region");

region.addEventListener("click", () => {
    region.classList.toggle("open");
});

const epoca = document.querySelector(".epoca");

epoca.addEventListener("click", () => {
    epoca.classList.toggle("open");
});

/*---------------CAMBIAR SELECCION---------------*/

var input_TOPglobal = document.getElementById("TOPglobal");
var input_TOPargentina = document.getElementById("TOPargentina");
var input_TOPeuropa = document.getElementById("TOPeuropa");
var input_TOPlatino = document.getElementById("TOPlatino");

console.log(input_TOPglobal);
console.log(input_TOPargentina);
console.log(input_TOPeuropa);
console.log(input_TOPlatino);

/*---------------GLOBAL---------------*/

input_TOPglobal.addEventListener('click', seleccionadoGlobal);

function seleccionadoGlobal(event) {
  event.preventDefault();

  const contenido = input_TOPglobal.innerText;

  console.log(contenido);

  var placeholder_seleccion = document.getElementById('seleccion-placeholder');

  placeholder_seleccion.innerHTML = contenido;

  elemento_seleccionado1 = document.getElementById('TOPglobal');
  elemento_seleccionado2 = document.getElementById('TOPargentina');
  elemento_seleccionado3 = document.getElementById('TOPeuropa');
  elemento_seleccionado4 = document.getElementById('TOPlatino');
  elemento_seleccionado1.classList.add('seleccionado2');
  elemento_seleccionado2.classList.remove('seleccionado2');
  elemento_seleccionado3.classList.remove('seleccionado2');
  elemento_seleccionado4.classList.remove('seleccionado2');
}

/*---------------ARGENTINA---------------*/

input_TOPargentina.addEventListener('click', seleccionadoArgentina);

function seleccionadoArgentina(event) {
  event.preventDefault();

  const contenido = input_TOPargentina.innerText;

  console.log(contenido);

  var placeholder_seleccion = document.getElementById('seleccion-placeholder');

  placeholder_seleccion.innerHTML = contenido;

  elemento_seleccionado1 = document.getElementById('TOPglobal');
  elemento_seleccionado2 = document.getElementById('TOPargentina');
  elemento_seleccionado3 = document.getElementById('TOPeuropa');
  elemento_seleccionado4 = document.getElementById('TOPlatino');
  elemento_seleccionado1.classList.remove('seleccionado2');
  elemento_seleccionado2.classList.add('seleccionado2');
  elemento_seleccionado3.classList.remove('seleccionado2');
  elemento_seleccionado4.classList.remove('seleccionado2');
}

/*---------------EUROPA---------------*/

/*input_europa.addEventListener('click', seleccionadoEuropa);

function seleccionadoEuropa(event) {
  event.preventDefault();

  const contenido = input_europa.innerText;

  console.log(contenido);

  var placeholder_seleccion = document.getElementById('seleccion-placeholder');

  placeholder_seleccion.innerHTML = contenido;

  elemento_seleccionado1 = document.getElementById('Tglobal');
  elemento_seleccionado2 = document.getElementById('Targentina');
  elemento_seleccionado3 = document.getElementById('Teuropa');
  elemento_seleccionado4 = document.getElementById('Tlatino');
  elemento_seleccionado1.classList.remove('seleccionado2');
  elemento_seleccionado2.classList.remove('seleccionado2');
  elemento_seleccionado3.classList.add('seleccionado2');
  elemento_seleccionado4.classList.remove('seleccionado2');
}*/

/*---------------LATINO---------------*/

/*input_latino.addEventListener('click', seleccionadoLatino);

function seleccionadoLatino(event) {
  event.preventDefault();

  const contenido = input_latino.innerText;

  console.log(contenido);

  var placeholder_seleccion = document.getElementById('seleccion-placeholder');

  placeholder_seleccion.innerHTML = contenido;

  elemento_seleccionado1 = document.getElementById('Tglobal');
  elemento_seleccionado2 = document.getElementById('Targentina');
  elemento_seleccionado3 = document.getElementById('Teuropa');
  elemento_seleccionado4 = document.getElementById('Tlatino');
  elemento_seleccionado1.classList.remove('seleccionado2');
  elemento_seleccionado2.classList.remove('seleccionado2');
  elemento_seleccionado3.classList.remove('seleccionado2');
  elemento_seleccionado4.classList.add('seleccionado2');
}*/

/*---------------CAMBIAR SELECCION---------------*/

var input_TOPglobalE = document.getElementById("TOPglobalE");
var input_TOP70s = document.getElementById("TOP70s");
var input_TOP80s = document.getElementById("TOP80s");
var input_TOP90s = document.getElementById("TOP90s");
var input_TOP00s = document.getElementById("TOP00s");
var input_TOP10s = document.getElementById("TOP10s");
var input_TOPactual = document.getElementById("TOPactual");

console.log(input_TOPglobalE);
console.log(input_TOP70s);
console.log(input_TOP80s);
console.log(input_TOP90s);
console.log(input_TOP00s);
console.log(input_TOP10s);
console.log(input_TOPactual);

/*---------------GLOBAL---------------*/

input_TOPactual.addEventListener('click', seleccionadoActual);

function seleccionadoActual(event) {
  event.preventDefault();

  const contenido = input_TOPactual.innerText;

  console.log(contenido);

  var placeholder_seleccion = document.getElementById('seleccion-placeholderE');

  placeholder_seleccion.innerHTML = contenido;

  elemento_seleccionado1 = document.getElementById('TOPglobalE');
  elemento_seleccionado2 = document.getElementById('TOP70s');
  elemento_seleccionado3 = document.getElementById('TOP80s');
  elemento_seleccionado4 = document.getElementById('TOP90s');
  elemento_seleccionado5 = document.getElementById('TOP00s');
  elemento_seleccionado6 = document.getElementById('TOP10s');
  elemento_seleccionado7 = document.getElementById('TOPactual');
  elemento_seleccionado1.classList.remove('seleccionado2');
  elemento_seleccionado2.classList.remove('seleccionado2');
  elemento_seleccionado3.classList.remove('seleccionado2');
  elemento_seleccionado4.classList.remove('seleccionado2');
  elemento_seleccionado5.classList.remove('seleccionado2');
  elemento_seleccionado6.classList.remove('seleccionado2');
  elemento_seleccionado7.classList.add('seleccionado2');
}

/*---------------00S---------------*/

input_TOP00s.addEventListener('click', seleccionado00s);

function seleccionado00s(event) {
  event.preventDefault();

  const contenido = input_TOP00s.innerText;

  console.log(contenido);

  var placeholder_seleccion = document.getElementById('seleccion-placeholderE');

  placeholder_seleccion.innerHTML = contenido;

  elemento_seleccionado1 = document.getElementById('TOPglobalE');
  elemento_seleccionado2 = document.getElementById('TOP70s');
  elemento_seleccionado3 = document.getElementById('TOP80s');
  elemento_seleccionado4 = document.getElementById('TOP90s');
  elemento_seleccionado5 = document.getElementById('TOP00s');
  elemento_seleccionado6 = document.getElementById('TOP10s');
  elemento_seleccionado7 = document.getElementById('TOPactual');
  elemento_seleccionado1.classList.remove('seleccionado2');
  elemento_seleccionado2.classList.remove('seleccionado2');
  elemento_seleccionado3.classList.remove('seleccionado2');
  elemento_seleccionado4.classList.remove('seleccionado2');
  elemento_seleccionado5.classList.add('seleccionado2');
  elemento_seleccionado6.classList.remove('seleccionado2');
  elemento_seleccionado7.classList.remove('seleccionado2');
}