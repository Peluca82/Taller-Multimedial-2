var input_BRglobal = document.getElementById("BRglobal");
var input_BRargentina = document.getElementById("BRargentina");
var input_BR00s = document.getElementById("BR00s");
var input_BRactual = document.getElementById("BRactual");

var input_secciones = document.getElementById("secciones");

var input_artista1Imagen = document.getElementById("artista1Imagen");
var input_artista2Imagen = document.getElementById("artista2Imagen");
var input_artista3Imagen = document.getElementById("artista3Imagen");
var input_artista4Imagen = document.getElementById("artista4Imagen");

var input_artista1Nombre = document.getElementById("artista1Nombre");
var input_artista2Nombre = document.getElementById("artista2Nombre");
var input_artista3Nombre = document.getElementById("artista3Nombre");
var input_artista4Nombre = document.getElementById("artista4Nombre");

var input_artista1Subtitulo = document.getElementById("artista1Subtitulo");
var input_artista2Subtitulo = document.getElementById("artista2Subtitulo");
var input_artista3Subtitulo = document.getElementById("artista3Subtitulo");
var input_artista4Subtitulo = document.getElementById("artista4Subtitulo");

var input_artista1Parrafo = document.getElementById("artista1Parrafo");
var input_artista2Parrafo = document.getElementById("artista2Parrafo");
var input_artista3Parrafo = document.getElementById("artista3Parrafo");
var input_artista4Parrafo = document.getElementById("artista4Parrafo");

console.log(input_secciones);

input_secciones.addEventListener('click', cambiarNoticia);

function cambiarNoticia(event) {
  event.preventDefault();
  
  if(input_BRglobal.classList.contains("seleccionado") && input_BR00s.classList.contains("seleccionado")) {

    input_artista1Imagen.src = "imagenes/Personalizacion/Global00s/camila.png";
    input_artista2Imagen.src = "imagenes/Personalizacion/Global00s/justin.png";
    input_artista3Imagen.src = "imagenes/Personalizacion/Global00s/balvin.png";
    input_artista4Imagen.src = "imagenes/Personalizacion/Global00s/taylor.png";

    input_artista1Nombre.innerHTML = "CAMILA";
    input_artista2Nombre.innerHTML = "JUSTIN QUILES";
    input_artista3Nombre.innerHTML = "J BALVIN";
    input_artista4Nombre.innerHTML = "TAYLOR SWIFT";

    input_artista1Subtitulo.innerHTML = "ASI FUE EL SHOW DE CAMILA EN BUENOS AIRES";
    input_artista2Subtitulo.innerHTML = "JUSTIN QUILES VUELVE A ARGENTINA";
    input_artista3Subtitulo.innerHTML = "J BALVIN SE UNE A JOWELL & RANDY Y THE LA GHETTO";
    input_artista4Subtitulo.innerHTML = "EL FENOMENO MUNDIAL DE TAYLOR SWIFT EN ARGENTINA";

    input_artista1Parrafo.innerHTML = "Es una ciudad maravillosa, la energía es increíble; son el mejor público de verdad” expresaron los artistas en el Movistar Arena en un concierto lleno...";
    input_artista2Parrafo.innerHTML = "El reconocido artista urbano Justin Quiles regresa a la Argentina el miércoles 22 de mayo al Estadio Movistar Arena, te contamos...";
    input_artista3Parrafo.innerHTML = "El artista colombiano se une al dúo puertorriqueño de reggaetón y al cantante norteamericano para estrenar el single...";
    input_artista4Parrafo.innerHTML = "Con una carrera de casi dos décadas que la catapultó a lo más alto a escala global, la artista estadounidense tocó...";

  } else if (input_BRglobal.classList.contains("seleccionado") && input_BRactual.classList.contains("seleccionado")) {

    input_artista1Imagen.src = "imagenes/Personalizacion/GlobalActual/lenny.png";
    input_artista2Imagen.src = "imagenes/Personalizacion/GlobalActual/maluma.png";
    input_artista3Imagen.src = "imagenes/Personalizacion/GlobalActual/aventura.png";
    input_artista4Imagen.src = "imagenes/Personalizacion/GlobalActual/ariana.png";

    input_artista1Nombre.innerHTML = "LENNY KRAVITZ";
    input_artista2Nombre.innerHTML = "MALUMA";
    input_artista3Nombre.innerHTML = "AVENTURA";
    input_artista4Nombre.innerHTML = "ARIANA GRANDE";

    input_artista1Subtitulo.innerHTML = "LENNY KRAVITZ suma fecha en Argentina";
    input_artista2Subtitulo.innerHTML = "Maluma presenta su nuevo single";
    input_artista3Subtitulo.innerHTML = "Aventura anunció su show en Argentina y ya es sould out";
    input_artista4Subtitulo.innerHTML = "Ariana Grande presenta su nuevo álbum";

    input_artista1Parrafo.innerHTML = "Tras agotar las entradas para su show en tan sólo 3 horas, el artista suma una nueva fecha en el Movistar Arena de Buenos Aires y las localidades ya se...";
    input_artista2Parrafo.innerHTML = "El cantante colombiano lanza su nuevo sencillo titulado “Contrato” con un videoclip grabado en la ciudad de Las Vegas...";
    input_artista3Parrafo.innerHTML = "La banda dominicana confirma las fechas de su tour “Cerrando ciclos” y llega a Latam, donde recorrerá varios países de Centro y...";
    input_artista4Parrafo.innerHTML = "Después de una pausa de cuatro años sin lanzar un álbum de estudio, la talentosa artista estadounidense...";
  }

  if(input_BRargentina.classList.contains("seleccionado") && input_BR00s.classList.contains("seleccionado")) {

    input_artista1Imagen.src = "imagenes/Personalizacion/Argentina00s/Babasonicos.png";
    input_artista2Imagen.src = "imagenes/Personalizacion/Argentina00s/Divididos.png";
    input_artista3Imagen.src = "imagenes/Personalizacion/Argentina00s/Miranda.png";
    input_artista4Imagen.src = "imagenes/Personalizacion/Argentina00s/Airbag.png";

    input_artista1Nombre.innerHTML = "Babasonicos";
    input_artista2Nombre.innerHTML = "Divididos";
    input_artista3Nombre.innerHTML = "Miranda!";
    input_artista4Nombre.innerHTML = "Airbag";

    input_artista1Subtitulo.innerHTML = "Babasónicos: gira internacional";
    input_artista2Subtitulo.innerHTML = "Divididos presenta su álbum en vivo";
    input_artista3Subtitulo.innerHTML = "Miranda! realizó su primer show en el Movistar Arena";
    input_artista4Subtitulo.innerHTML = "Hoy 16 hs se habilitan nuevas entradas para Airbag";

    input_artista1Parrafo.innerHTML = "La reconocida banda argentina de rock-pop ha anunciado las fechas de sus conciertos para la primera mitad del año";
    input_artista2Parrafo.innerHTML = "La banda de rock nacional revive el concierto que brindó en el Estadio Vélez por la celebración de sus 35 años";
    input_artista3Parrafo.innerHTML = "El dúo argentino realizó el primer concierto de sus cuatro Movistar Arena dando un show debut con cambios de look";
    input_artista4Parrafo.innerHTML = "A partir de las 16 hs de hoy se publicarán a la venta las entradas para la nueva función de Airbag en el Estadio Luna Park";

  } else if (input_BRargentina.classList.contains("seleccionado") && input_BRactual.classList.contains("seleccionado")) {

    input_artista1Imagen.src = "imagenes/Personalizacion/ArgentinaActual/duki.png";
    input_artista2Imagen.src = "imagenes/Personalizacion/ArgentinaActual/nicki.png";
    input_artista3Imagen.src = "imagenes/Personalizacion/ArgentinaActual/luck.png";
    input_artista4Imagen.src = "imagenes/Personalizacion/ArgentinaActual/maria.png";

    input_artista1Nombre.innerHTML = "duki";
    input_artista2Nombre.innerHTML = "nicki nicole";
    input_artista3Nombre.innerHTML = "luck ra";
    input_artista4Nombre.innerHTML = "maria becerra";

    input_artista1Subtitulo.innerHTML = "CONCIERTO HISTÓRICO DE DUKI EN EL BERNABÉU";
    input_artista2Subtitulo.innerHTML = "NICKY NICOLE Y SECH LANZAN UN SINGLE";
    input_artista3Subtitulo.innerHTML = "LUCK RA, KHEA Y MALUMA LANZAN UN REMIX";
    input_artista4Subtitulo.innerHTML = "maría becerra anuncia su gira mundial";

    input_artista1Parrafo.innerHTML = "Duki hizo historia al ser el primer músico argentino en brindar un concierto en el estadio del Real Madrid, y estuvo acompañado por Bizarrap, Emilia, Nicki Nicole...";
    input_artista2Parrafo.innerHTML = "Los artistas presentan “Cafecito” un single que es el resultado de la colaboración del DJ/productor Gordo con un...";
    input_artista3Parrafo.innerHTML = "El cantante y compositor cordobés nos presenta el remix de “Hola perdida”, en el cual suma al artista colombiano Maluma...";
    input_artista4Parrafo.innerHTML = "La Nena de Argentina anuncia su nueva gira mundial, “#Tour24”, donde recorrerá más de cincuenta países...";
  }
}