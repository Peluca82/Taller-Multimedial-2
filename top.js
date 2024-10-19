var input_TOPglobal = document.getElementById("TOPglobal");
var input_TOPargentina = document.getElementById("TOPargentina");
var input_TOP00s = document.getElementById("TOP00s");
var input_TOPactual = document.getElementById("TOPactual");

var input_desplegables = document.getElementById("desplegables");

var input_TOPArtista1Imagen = document.getElementById("TOPArtista1Imagen");
var input_TOPArtista2Imagen = document.getElementById("TOPArtista2Imagen");
var input_TOPArtista3Imagen = document.getElementById("TOPArtista3Imagen");
var input_TOPArtista4Imagen = document.getElementById("TOPArtista4Imagen");
var input_TOPArtista5Imagen = document.getElementById("TOPArtista5Imagen");
var input_TOPArtista6Imagen = document.getElementById("TOPArtista6Imagen");
var input_TOPArtista7Imagen = document.getElementById("TOPArtista7Imagen");
var input_TOPArtista8Imagen = document.getElementById("TOPArtista8Imagen");
var input_TOPArtista9Imagen = document.getElementById("TOPArtista9Imagen");
var input_TOPArtista10Imagen = document.getElementById("TOPArtista10Imagen");

var input_TOPArtista1Cancion = document.getElementById("TOPArtista1Cancion");
var input_TOPArtista2Cancion = document.getElementById("TOPArtista2Cancion");
var input_TOPArtista3Cancion = document.getElementById("TOPArtista3Cancion");
var input_TOPArtista4Cancion = document.getElementById("TOPArtista4Cancion");
var input_TOPArtista5Cancion = document.getElementById("TOPArtista5Cancion");
var input_TOPArtista6Cancion = document.getElementById("TOPArtista6Cancion");
var input_TOPArtista7Cancion = document.getElementById("TOPArtista7Cancion");
var input_TOPArtista8Cancion = document.getElementById("TOPArtista8Cancion");
var input_TOPArtista9Cancion = document.getElementById("TOPArtista9Cancion");
var input_TOPArtista10Cancion = document.getElementById("TOPArtista10Cancion");

var input_TOPArtista1Autor = document.getElementById("TOPArtista1Autor");
var input_TOPArtista2Autor = document.getElementById("TOPArtista2Autor");
var input_TOPArtista3Autor = document.getElementById("TOPArtista3Autor");
var input_TOPArtista4Autor = document.getElementById("TOPArtista4Autor");
var input_TOPArtista5Autor = document.getElementById("TOPArtista5Autor");
var input_TOPArtista6Autor = document.getElementById("TOPArtista6Autor");
var input_TOPArtista7Autor = document.getElementById("TOPArtista7Autor");
var input_TOPArtista8Autor = document.getElementById("TOPArtista8Autor");
var input_TOPArtista9Autor = document.getElementById("TOPArtista9Autor");
var input_TOPArtista10Autor = document.getElementById("TOPArtista10Autor");

console.log(input_desplegables);

input_desplegables.addEventListener('click', cambiarNoticia);

function cambiarNoticia(event) {
  event.preventDefault();
  
  if(input_TOPglobal.classList.contains("seleccionado2") && input_TOP00s.classList.contains("seleccionado2")) {

    input_TOPArtista1Imagen.src = "imagenes/Tops/Global00s/1.png";
    input_TOPArtista2Imagen.src = "imagenes/Tops/Global00s/2.png";
    input_TOPArtista3Imagen.src = "imagenes/Tops/Global00s/3.png";
    input_TOPArtista4Imagen.src = "imagenes/Tops/Global00s/4.png";
    input_TOPArtista5Imagen.src = "imagenes/Tops/Global00s/5.png";
    input_TOPArtista6Imagen.src = "imagenes/Tops/Global00s/6.png";
    input_TOPArtista7Imagen.src = "imagenes/Tops/Global00s/7.png";
    input_TOPArtista8Imagen.src = "imagenes/Tops/Global00s/8.png";
    input_TOPArtista9Imagen.src = "imagenes/Tops/Global00s/9.png";
    input_TOPArtista10Imagen.src = "imagenes/Tops/Global00s/10.png";
    
    input_TOPArtista1Cancion.innerHTML = "THE REAL SLIM SHADY";
    input_TOPArtista2Cancion.innerHTML = "CRAZY IN LOVE";
    input_TOPArtista3Cancion.innerHTML = "CRAZY";
    input_TOPArtista4Cancion.innerHTML = "REHAB";
    input_TOPArtista5Cancion.innerHTML = "LAST NITE";
    input_TOPArtista6Cancion.innerHTML = "YELLOW";
    input_TOPArtista7Cancion.innerHTML = "BAD ROMANCE";
    input_TOPArtista8Cancion.innerHTML = "SEVEN NATION ARMY";
    input_TOPArtista9Cancion.innerHTML = "TOXIC";
    input_TOPArtista10Cancion.innerHTML = "UMBRELLA";

    input_TOPArtista1Autor.innerHTML = "EMINEM";
    input_TOPArtista2Autor.innerHTML = "BEYONCÉ";
    input_TOPArtista3Autor.innerHTML = "GNARLS BARKLEY";
    input_TOPArtista4Autor.innerHTML = "AMY WINEHOUSE";
    input_TOPArtista5Autor.innerHTML = "THE STROKES";
    input_TOPArtista6Autor.innerHTML = "COLDPLAY";
    input_TOPArtista7Autor.innerHTML = "LADY GAGA";
    input_TOPArtista8Autor.innerHTML = "THE WHITE STRIPES";
    input_TOPArtista9Autor.innerHTML = "BRITNEY SPEARS";
    input_TOPArtista10Autor.innerHTML = "RIHANNA";

  } else if (input_TOPglobal.classList.contains("seleccionado2") && input_TOPactual.classList.contains("seleccionado2")) {

    input_TOPArtista1Imagen.src = "imagenes/Tops/GlobalActual/1.png";
    input_TOPArtista2Imagen.src = "imagenes/Tops/GlobalActual/2.png";
    input_TOPArtista3Imagen.src = "imagenes/Tops/GlobalActual/3.png";
    input_TOPArtista4Imagen.src = "imagenes/Tops/GlobalActual/4.png";
    input_TOPArtista5Imagen.src = "imagenes/Tops/GlobalActual/5.png";
    input_TOPArtista6Imagen.src = "imagenes/Tops/GlobalActual/6.png";
    input_TOPArtista7Imagen.src = "imagenes/Tops/GlobalActual/7.png";
    input_TOPArtista8Imagen.src = "imagenes/Tops/GlobalActual/8.png";
    input_TOPArtista9Imagen.src = "imagenes/Tops/GlobalActual/9.png";
    input_TOPArtista10Imagen.src = "imagenes/Tops/GlobalActual/10.png";
    
    input_TOPArtista1Cancion.innerHTML = "FLOWERS";
    input_TOPArtista2Cancion.innerHTML = "TQG";
    input_TOPArtista3Cancion.innerHTML = "KILL BILL";
    input_TOPArtista4Cancion.innerHTML = "LA BEBÉ";
    input_TOPArtista5Cancion.innerHTML = "SEVEN";
    input_TOPArtista6Cancion.innerHTML = "BZRP MUSIC SESSION #53";
    input_TOPArtista7Cancion.innerHTML = "ELLA BAILA SOLA";
    input_TOPArtista8Cancion.innerHTML = "UN X100TO";
    input_TOPArtista9Cancion.innerHTML = "CLASSY 101";
    input_TOPArtista10Cancion.innerHTML = "LALA";

    input_TOPArtista1Autor.innerHTML = "MILEY CYRUS";
    input_TOPArtista2Autor.innerHTML = "KAROL G & SHAKIRA";
    input_TOPArtista3Autor.innerHTML = "ZSA";
    input_TOPArtista4Autor.innerHTML = "YNG LVCAS & PESO PLUMA";
    input_TOPArtista5Autor.innerHTML = "JUNG KOOK & LATTO";
    input_TOPArtista6Autor.innerHTML = "BZRP & SHAKIRA";
    input_TOPArtista7Autor.innerHTML = "ESLABON ARMADO & PESO PLUMA";
    input_TOPArtista8Autor.innerHTML = "GRUPO FRONTERA & BAD BUNNY";
    input_TOPArtista9Autor.innerHTML = "FEID & YOUNG MIKO";
    input_TOPArtista10Autor.innerHTML = "MYKE TOWERS";
  }

  if(input_TOPargentina.classList.contains("seleccionado2") && input_TOP00s.classList.contains("seleccionado2")) {

    input_TOPArtista1Imagen.src = "imagenes/Tops/Argentina00s/1.png";
    input_TOPArtista2Imagen.src = "imagenes/Tops/Argentina00s/2.png";
    input_TOPArtista3Imagen.src = "imagenes/Tops/Argentina00s/3.png";
    input_TOPArtista4Imagen.src = "imagenes/Tops/Argentina00s/4.png";
    input_TOPArtista5Imagen.src = "imagenes/Tops/Argentina00s/5.png";
    input_TOPArtista6Imagen.src = "imagenes/Tops/Argentina00s/6.png";
    input_TOPArtista7Imagen.src = "imagenes/Tops/Argentina00s/7.png";
    input_TOPArtista8Imagen.src = "imagenes/Tops/Argentina00s/8.png";
    input_TOPArtista9Imagen.src = "imagenes/Tops/Argentina00s/9.png";
    input_TOPArtista10Imagen.src = "imagenes/Tops/Argentina00s/10.png";
    
    input_TOPArtista1Cancion.innerHTML = "SERÁ";
    input_TOPArtista2Cancion.innerHTML = "UN OSITO DE PELUCHE DE TAIWAN";
    input_TOPArtista3Cancion.innerHTML = "ESTADIO AZTECA";
    input_TOPArtista4Cancion.innerHTML = "CRIMEN";
    input_TOPArtista5Cancion.innerHTML = "SPAGHETTI DE ROCK";
    input_TOPArtista6Cancion.innerHTML = "JUNTOS A LA PAR";
    input_TOPArtista7Cancion.innerHTML = "LOS CALIENTES";
    input_TOPArtista8Cancion.innerHTML = "PASOS AL COSTADO";
    input_TOPArtista9Cancion.innerHTML = "ARRANCACORAZONES";
    input_TOPArtista10Cancion.innerHTML = "NUNCA QUISE";

    input_TOPArtista1Autor.innerHTML = "LAS PELOTAS";
    input_TOPArtista2Autor.innerHTML = "LOS AUTENTICOS DECADENTES";
    input_TOPArtista3Autor.innerHTML = "ANDRES CALAMARO";
    input_TOPArtista4Autor.innerHTML = "GUSTAVO CERATI";
    input_TOPArtista5Autor.innerHTML = "DIVIDIDOS";
    input_TOPArtista6Autor.innerHTML = "PAPPO";
    input_TOPArtista7Autor.innerHTML = "BABASONICOS";
    input_TOPArtista8Autor.innerHTML = "TURF";
    input_TOPArtista9Autor.innerHTML = "ATTAQUE 77";
    input_TOPArtista10Autor.innerHTML = "INTOXICADOS";

  } else if (input_TOPargentina.classList.contains("seleccionado2") && input_TOPactual.classList.contains("seleccionado2")) {

    input_TOPArtista1Imagen.src = "imagenes/Tops/ArgentinaActual/1.png";
    input_TOPArtista2Imagen.src = "imagenes/Tops/ArgentinaActual/2.png";
    input_TOPArtista3Imagen.src = "imagenes/Tops/ArgentinaActual/3.png";
    input_TOPArtista4Imagen.src = "imagenes/Tops/ArgentinaActual/4.png";
    input_TOPArtista5Imagen.src = "imagenes/Tops/ArgentinaActual/5.png";
    input_TOPArtista6Imagen.src = "imagenes/Tops/ArgentinaActual/6.png";
    input_TOPArtista7Imagen.src = "imagenes/Tops/ArgentinaActual/7.png";
    input_TOPArtista8Imagen.src = "imagenes/Tops/ArgentinaActual/8.png";
    input_TOPArtista9Imagen.src = "imagenes/Tops/ArgentinaActual/9.png";
    input_TOPArtista10Imagen.src = "imagenes/Tops/ArgentinaActual/10.png";
    
    input_TOPArtista1Cancion.innerHTML = "REAL GANGSTA LOVE";
    input_TOPArtista2Cancion.innerHTML = "PERDONARTE, ¿PARA QUÉ?";
    input_TOPArtista3Cancion.innerHTML = "HOY";
    input_TOPArtista4Cancion.innerHTML = "OJOS VERDES";
    input_TOPArtista5Cancion.innerHTML = "TU FOTO";
    input_TOPArtista6Cancion.innerHTML = "CUANDO TE VI";
    input_TOPArtista7Cancion.innerHTML = "UN BESITO MÁS";
    input_TOPArtista8Cancion.innerHTML = "PIEL";
    input_TOPArtista9Cancion.innerHTML = "IMAN (TWO OF US)";
    input_TOPArtista10Cancion.innerHTML = "LA_PLAYLIST.MPEG";

    input_TOPArtista1Autor.innerHTML = "TRUENO";
    input_TOPArtista2Autor.innerHTML = "LOS ÁNGELES AZULES, EMILIA";
    input_TOPArtista3Autor.innerHTML = "VALENTINO MERLO, THE LA PLANTA";
    input_TOPArtista4Autor.innerHTML = "NICKI NICOLE";
    input_TOPArtista5Autor.innerHTML = "Q´LOKURA, VALENTINO MERLO";
    input_TOPArtista6Autor.innerHTML = "BIG ONE, MARIA BECERRA, TRUENO";
    input_TOPArtista7Autor.innerHTML = "SALASTKRON, DIE PARIS";
    input_TOPArtista8Autor.innerHTML = "TIEGO PZK, KE PERSONAJES";
    input_TOPArtista9Autor.innerHTML = "MARIA BECERRA";
    input_TOPArtista10Autor.innerHTML = "EMILIA";
  }
}