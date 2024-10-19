/*---------------DROPBOX---------------*/

const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Seleccionado`;
            }else{
                btnText.innerText = "Categorias";
            }
    });
})

/*---------------CARRUSEL---------------*/

const carousel = document.getElementById("carousel");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

leftArrow.onclick = () => handleCarouselIndexChange("left");
rightArrow.onclick = () => handleCarouselIndexChange("right");

const handleCarouselIndexChange = (direction) => {
  const allCarouselItems = Array.from(carousel.children);

  allCarouselItems.forEach((el) => {
    const index = +el.getAttribute("data-index");

    if (direction === "right") {
      if (index !== 0) return el.setAttribute("data-index", index - 1);
      return el.setAttribute("data-index", "6");
    }

    if (direction === "left") {
      if (index !== 6) return el.setAttribute("data-index", index + 1);
      return el.setAttribute("data-index", "0");
    }
  });

  allCarouselItems.forEach((el) => {
    el.style = "";
    adjustSizeAndPosition(el, el.getAttribute("data-index"));
  });
};

const adjustSizeAndPosition = (element, index) => {
  element.classList.replace(element.classList[1], `carousel-card-${index}`);
};

/*---------------MENSAJE FINAL---------------*/

var input_nombre = document.getElementById("nombre");
var input_nickname = document.getElementById("nickname");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("boton-enviar");
var input_volver = document.getElementById("boton-volver");

console.log(input_nombre);
console.log(input_nickname);
console.log(input_email);
console.log(input_submit);
console.log(input_volver);

input_submit.addEventListener('click', enviarFormulario);

function enviarFormulario(event) {
  event.preventDefault();

  var valor_nombre = input_nombre.value;
  var valor_nickname = input_nickname.value;
  var valor_email = input_email.value;

  console.log(valor_nombre);
  console.log(valor_nickname);
  console.log(valor_email);

  var placeholder_nombre = document.getElementById('nombre-placeholder');
  var placeholder_nickname = document.getElementById('nickname-placeholder');
  var placeholder_email = document.getElementById('email-placeholder');

  placeholder_nickname.innerHTML = valor_nickname;
  placeholder_email.innerHTML = valor_email;

  elemento_feedback = document.getElementById('feedback');
  elemento_feedback.classList.remove('oculto');
  elemento_feedback.classList.add('visible');
  elemento_scroll = document.getElementById('body');
  elemento_scroll.classList.add('scroll');
}

input_volver.addEventListener('click', cerrarVentana);

function cerrarVentana(evento) {
    elemento_volver = document.getElementById('feedback');
    elemento_volver.classList.remove('visible');
    elemento_feedback.classList.add('oculto');
    elemento_scroll.classList.remove('scroll');
}