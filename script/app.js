function hamburguesa() {
  var element = document.getElementById("menu");
  element.classList.toggle("menuRes");
} 
function openNav() {
  document.getElementById("mySidenav").style.width = "22%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";

}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
}
function userDrop() {
  document.getElementById("userDate").classList.toggle("show");
}
function userDropCat(){
  document.getElementById("categorias").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("user-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/////////////carrusel
const carouselSlide = document.querySelector('.carrousel');
const carouselImages = document.querySelectorAll('.carrousel__container');
///bbuttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//bButtons listener
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length -1) return;
  carouselSlide.style.transition ="transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition ="transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none"
    counter = carouselImages.lenght - 1;
    carouselSlide.style.transfrom = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none"
    counter = carouselImages.lenght - counter;
    carouselSlide.style.transfrom = 'translateX(' + (-size * counter) + 'px)';
  }
})