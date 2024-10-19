

//-------------------REPRODUCTOR------------------//

var audio = document.getElementById('audio');

audio.volume = 0.1;

$("#plays_btn").click(function() {

    if (audio.paused == false) {
        audio.pause();
        $("#play_btn").show();
        $("#pause_btn").hide();
    } else {
        audio.play();
        $("#play_btn").hide();
        $("#pause_btn").show();
    }
});

audio.addEventListener("timeupdate", function() {
    var currentTime = audio.currentTime,
        duration = audio.duration,
        currentTimeMs = audio.currentTime * 1000;
    $('.progressbar_range').stop(true, true).animate({'width': (currentTime + .25) / duration * 100 + '%'}, 250, 'linear');
});

audio.addEventListener("timeupdate", function() {
    var timeleft = document.getElementById('timeleft'),
        duration = parseInt( audio.duration ),
        currentTime = parseInt( audio.currentTime ),
        timeLeft = duration - currentTime,
        s, m;
    
    s = timeLeft % 60;
    m = Math.floor( timeLeft / 60 ) % 60;
    
    s = s < 10 ? "0"+s : s;
    m = m < 10 ? "0"+m : m;
    
    $('#timeleft').text("-"+m+":"+s);
    
});

var cancion1 = document.getElementById('cancion1');
var cancion2 = document.getElementById('cancion2');
var cancion3 = document.getElementById('cancion3');
var cancion4 = document.getElementById('cancion4');

cancion1.addEventListener('click', CambiarCancion1);

function CambiarCancion1(event) {
    event.preventDefault();

    var titulo = document.getElementById('tituloR');
    var artista = document.getElementById('artistaR');

    titulo.innerHTML = "Drowned in the sun";
    artista.innerHTML = "Kurt Cobain";

    audio.src = "Canciones/Nirvana - Drowned In The Sun.mp3";
    audio.play();
    $("#play_btn").hide();
    $("#pause_btn").show();
}

cancion2.addEventListener('click', CambiarCancion2);

function CambiarCancion2(event) {
    event.preventDefault();

    var titulo = document.getElementById('tituloR');
    var artista = document.getElementById('artistaR');

    titulo.innerHTML = "The Roads are Alive";
    artista.innerHTML = "Jim Morrison";

    audio.src = "Canciones/The Doors - The Roads are Alive.mp3";
    audio.play();
    $("#play_btn").hide();
    $("#pause_btn").show();
}

cancion3.addEventListener('click', CambiarCancion3);

function CambiarCancion3(event) {
    event.preventDefault();

    var titulo = document.getElementById('tituloR');
    var artista = document.getElementById('artistaR');

    titulo.innerHTML = "You´re Gonna Kill Me";
    artista.innerHTML = "Jimi Hendrix";

    audio.src = "Canciones/Jimi Hendrix - You're Gonna Kill Me.mp3";
    audio.play();
    $("#play_btn").hide();
    $("#pause_btn").show();
}

cancion4.addEventListener('click', CambiarCancion4);

function CambiarCancion4(event) {
    event.preventDefault();

    var titulo = document.getElementById('tituloR');
    var artista = document.getElementById('artistaR');

    titulo.innerHTML = "Man, I Know";
    artista.innerHTML = "Amy Winehouse";

    audio.src = "Canciones/Amy Winehouse - Man I Know.mp3";
    audio.play();
    $("#play_btn").hide();
    $("#pause_btn").show();
}

var volumen = document.getElementById("myRange");

volumen.addEventListener("change", cambiarVolumen);

function cambiarVolumen() {
    let valorVolumen = volumen.value / 100;
    audio.volume = valorVolumen;
}

//-------------------MENSAJE------------------//

var fondo = document.getElementById("fondo");
var fondo2 = document.getElementById("fondo2");
var siguiente = document.getElementById("boton-volver");
var volver = document.getElementById("boton-volver2");

cancion1.addEventListener('click', kurt);

function kurt(event) {
  event.preventDefault();

  elemento_feedback = document.getElementById('feedback');
  elemento_feedback.classList.remove('oculto');
  elemento_feedback.classList.add('visible');

  autor = document.getElementById("autor");
  autor2 = document.getElementById("autor2");
  contenido = document.getElementById("contenido");
  contenido2 = document.getElementById("contenido2");
  foto = document.getElementById("imagenCaja");
  foto2 = document.getElementById("imagenCaja2");

  foto.src = "Imagenes/Vinilo/Kurt.png";
  foto2.src = "Imagenes/Vinilo/Kurt.png";
  autor.innerHTML = "Kurt Cobain";
  autor2.innerHTML = "Kurt Cobain";
  contenido.innerHTML = "La canción que se está reproduciendo fue creada por “Over The Bridge”, una organización que utilizó inteligencia artificial para componer el álbum “Lost Tapes of the 27 Club”, del cuál forma parte dicha canción titulada “Drowned in the sun”. En este caso, la voz que se escucha no es real, sino que, mediante la utilización de la IA, imitan al cantante Kurt Cobain.";
  contenido2.innerHTML = "El 8 de abril de 1994, Kurt Cobain, fue encontrado muerto en su casa de Seattle, Washington. Los investigadores forenses determinaron más tarde que había muerto tres días antes, el 5 de abril. El informe del incidente indicó que el cuerpo fue encontrado con una escopeta sobre el pecho, había sufrido una herida de bala en la cabeza y que se había descubierto una nota de suicidio cerca. La policía de Seattle dictaminó que la muerte del músico fue un suicidio. Durante la mayor parte de su vida, sufrió bronquitis crónica y dolor intenso debido a una condición estomacal crónica no diagnosticada. También era propenso al alcoholismo, sufría de depresión y usaba drogas e inhalantes con regularidad.";
}

cancion2.addEventListener('click', jim);

function jim(event) {
  event.preventDefault();

  elemento_feedback = document.getElementById('feedback');
  elemento_feedback.classList.remove('oculto');
  elemento_feedback.classList.add('visible');
  
  autor = document.getElementById("autor");
  autor2 = document.getElementById("autor2");
  contenido = document.getElementById("contenido");
  contenido2 = document.getElementById("contenido2");
  foto = document.getElementById("imagenCaja");
  foto2 = document.getElementById("imagenCaja2");
  
  foto.src = "Imagenes/Vinilo/Jim.png";
  foto2.src = "Imagenes/Vinilo/Jim.png";
  autor.innerHTML = "Jim Morrison";
  autor2.innerHTML = "Jim Morrison";
  contenido.innerHTML = "La canción que se está reproduciendo fue creada por “Over The Bridge”, una organización que utilizó inteligencia artificial para componer el álbum “Lost Tapes of the 27 Club”, del cuál forma parte dicha canción titulada “The roads are alive”. En este caso, la voz que se escucha no es real, sino que, mediante la utilización de la IA, imitan al cantante Jim Morrison.";
  contenido2.innerHTML = "Jim Morrison desarrolló una dependencia al alcohol. Murió al unirse al Club de los 27 en París. La mañana del 3 de julio de 1971 Pamela Courson lo encontró muerto en la bañera de su piso del barrio de Le Marais en París, Francia, donde vivían juntos. Se declaró que murió por un paro cardíaco, según su acta de defunción. Es indudable que había sido consumidor habitual de varios tipos de drogas (LSD, cannabis y peyote) y, según dicen, siempre defendió el uso de estas sustancias psicoactivas. Sin embargo, no es probable que consumiera heroína, principalmente porque tenía diagnosticado una fobia a las agujas.";
}


cancion3.addEventListener('click', jimi);

function jimi(event) {
  event.preventDefault();

  elemento_feedback = document.getElementById('feedback');
  elemento_feedback.classList.remove('oculto');
  elemento_feedback.classList.add('visible');
  
  autor = document.getElementById("autor");
  autor2 = document.getElementById("autor2");
  contenido = document.getElementById("contenido");
  contenido2 = document.getElementById("contenido2");
  foto = document.getElementById("imagenCaja");
  foto2 = document.getElementById("imagenCaja2");
  
  foto.src = "Imagenes/Vinilo/Jimi.png";
  foto2.src = "Imagenes/Vinilo/Jimi.png";
  autor.innerHTML = "Jimi Hendrix";
  autor2.innerHTML = "Jimi Hendrix";
  contenido.innerHTML = "La canción que se está reproduciendo fue creada por “Over The Bridge”, una organización que utilizó inteligencia artificial para componer el álbum “Lost Tapes of the 27 Club”, del cuál forma parte dicha canción titulada “You're gonna kill”. En este caso, la voz que se escucha no es real, sino que, mediante la utilización de la IA, imitan al cantante Jimi Hendrix.";
  contenido2.innerHTML = "Jimi Hendrix, en su momento, fue el artista mejor pagado, antes de su muerte por ingesta de barbitúricos el 18 de septiembre de 1970 a los 27 años de edad. Para determinar la causa de la muerte, el forense ordenó una autopsia, que se realizó el 21 de septiembre. Se declaró que Hendrix había tomado siete de sus pastillas de prescripcion médica Vesparax, 18 veces más de la dosis recomendada. Sin embargo en el programa “autopsias de Hollywood” después de un análisis, conocimiento y más tecnología que el momento de su autopsia, se ha relevado que la causa de su muerte fue un efisema pulmonar.";
}

cancion4.addEventListener('click', amy);

function amy(event) {
  event.preventDefault();

  elemento_feedback = document.getElementById('feedback');
  elemento_feedback.classList.remove('oculto');
  elemento_feedback.classList.add('visible');
  
  autor = document.getElementById("autor");
  autor2 = document.getElementById("autor2");
  contenido = document.getElementById("contenido");
  contenido2 = document.getElementById("contenido2");
  foto = document.getElementById("imagenCaja");
  foto2 = document.getElementById("imagenCaja2");
  
  foto.src = "Imagenes/Vinilo/Amy.png";
  foto2.src = "Imagenes/Vinilo/Amy.png";
  autor.innerHTML = "Amy Winehouse";
  autor2.innerHTML = "Amy Winehouse";
  contenido.innerHTML = "La canción que se está reproduciendo fue creada por “Over The Bridge”, una organización que utilizó inteligencia artificial para componer el álbum “Lost Tapes of the 27 Club”, del cuál forma parte dicha canción titulada “Man, i know”. En este caso, la voz que se escucha no es real, sino que, mediante la utilización de la IA, imitan al cantante Amy Winehouse.";
  contenido2.innerHTML = "Amy Winehouse fue encontrada muerta en su apartamento el 23 de julio de 2011, a los 27 años de edad, tras sufrir una intoxicación etílica. Esto se reveló tiempo después de su muerte, que en un principio fue asociada a sus múltiples adicciones. En una entrevista en la CNN en septiembre, el padre de Winehouse, quien a su vez se encontraba en proceso de rehabilitación del alcoholismo, sostuvo la teoría de que su muerte pudo producirse por un ataque provocado por las sustancias que le habían prescrito para aliviar los efectos del síndrome de abstinencia del alcohol. El 25 de octubre de 2011 se hizo público el resultado de la autopsia. La investigación forense halló 416 mg/dl de alcohol en sangre. 350 mg/dl era considerado fatal, es decir, que implicaba la muerte.";
}












siguiente.addEventListener('click', muerte);

function muerte() {

    elemento_feedback = document.getElementById('feedback');
    elemento_feedback.classList.remove('visible');
    elemento_feedback.classList.add('oculto');

    elemento_feedback2 = document.getElementById('feedback2');
    elemento_feedback2.classList.remove('oculto');
    elemento_feedback2.classList.add('visible');
}  

volver.addEventListener('click', cancion);

function cancion() {

    elemento_feedback = document.getElementById('feedback');
    elemento_feedback.classList.remove('oculto');
    elemento_feedback.classList.add('visible');

    elemento_feedback2 = document.getElementById('feedback2');
    elemento_feedback2.classList.remove('visible');
    elemento_feedback2.classList.add('oculto');
} 

fondo.addEventListener('click', cerrarVentana);

function cerrarVentana() {

    elemento_feedback = document.getElementById('feedback');
    elemento_feedback.classList.remove('visible');
    elemento_feedback.classList.add('oculto');
}

fondo2.addEventListener('click', cerrarVentana2);

function cerrarVentana2() {

    elemento_feedback2 = document.getElementById('feedback2');
    elemento_feedback2.classList.remove('visible');
    elemento_feedback2.classList.add('oculto');
}