'use strict'

const grandeUno = document.querySelector('.slideshow-articulo-1')
const puntoUno = document.querySelectorAll('.punto-1')
const grandeDos = document.querySelector('.slideshow-articulo-2')
const puntoDos = document.querySelectorAll('.punto-2')
// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
puntoUno.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    puntoUno[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -5

        // MOVEMOS el grand
        grandeUno.style.transform = `translateX(${ operacion }%)`
        // Recorremos TODOS los punto
        puntoUno.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            puntoUno[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        puntoUno[i].classList.add('activo')

    })
})
//////////////
puntoDos.forEach( ( cadaPunto , i )=> {
  // Asignamos un CLICK a cadaPunto
  puntoDos[i].addEventListener('click',()=>{

      // Guardar la posición de ese PUNTO
      let posicion  = i
      // Calculando el espacio que debe DESPLAZARSE el GRANDE
      let operacion = posicion * -5

      // MOVEMOS el grand
      grandeDos.style.transform = `translateX(${ operacion }%)`
      // Recorremos TODOS los punto
      puntoDos.forEach( ( cadaPunto , i )=>{
          // Quitamos la clase ACTIVO a TODOS los punto
          puntoDos[i].classList.remove('activo')
      })
      // Añadir la clase activo en el punto que hemos hecho CLICK
      puntoDos[i].classList.add('activo')

  })
})
////////////////
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("main__articulo__contenido__img");
  var dots = document.getElementsByClassName("main__articulo__contenido__pics");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

;
//
//MODALL
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for(let i=0; i<imgs.length;i++){

  imgs[i].onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

