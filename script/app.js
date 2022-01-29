
function hamburguesa() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
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
/////////////////////////////
const botom = document.querySelector(".dropdownBtn");
const contenedorDrop = document.querySelector(".drop-content")
const classes = contenedorDrop.classList;

botom.addEventListener('click', function() {
  const result = classes.toggle("show");
  console.log(botom.addEventListener)
});
let botomInfo = document.querySelector(".plus");
const infoContent = document.querySelector(".informe");
botomInfo.addEventListener('click', function(){
  let contendorClass = infoContent.classList; 
  contendorClass.toggle("show-grid");
});
let btnHousing = document.querySelector(".housingB");
let btnRig = document.querySelector(".rigB");
let btnPlacas = document.querySelector(".placasB");
let btnSoporte = document.querySelector(".soporteB")
let contenedorForm = document.querySelectorAll(".formD");
btnHousing.addEventListener('click', function(){
  let contenedorClasse = contenedorForm[0].classList;
  contenedorClasse.toggle("housing");
  contenedorForm[1].classList.add("rigs");
  contenedorForm[2].classList.add("placas")
  contenedorForm[3].classList.add("soporte")
});
btnRig.addEventListener('click', function(){
  let contenedorClasse = contenedorForm[1].classList;
  contenedorClasse.toggle("rigs");
  contenedorForm[0].classList.add("housing")
  contenedorForm[2].classList.add("placas")
  contenedorForm[3].classList.add("soporte")
});
btnPlacas.addEventListener('click', function(){
  let contenedorClasse = contenedorForm[2].classList;
  contenedorClasse.toggle("placas");
  contenedorForm[0].classList.add("housing")
  contenedorForm[1].classList.add("rigs")
  contenedorForm[3].classList.add("soporte")
});
btnSoporte.addEventListener('click', function(){
  let contenedorClasse = contenedorForm[3].classList;
  contenedorClasse.toggle("soporte");
  contenedorForm[0].classList.add("housing")
  contenedorForm[1].classList.add("rigs")
  contenedorForm[2].classList.add("placas")
  

});
/////////////carrusel
function carrouselStart(){
    
    
  const carouselSlide = document.querySelector('.carrousel');
  const carouselImages = document.querySelectorAll('.carrousel__container');
  ///bbuttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  //counter
  const size = carouselImages[0].clientWidth;

  carouselSlide.style.transform = `translateX(${-size*1}px)`;
  
  let inMove = false;
  let lastMove;

  function afterSlide(action){

      if(action == 1){

          carouselSlide.append(carouselSlide.children[0]);
      }else if(action == -1){
          
          carouselSlide.insertBefore(carouselSlide.children[carouselSlide.children.length-1],carouselSlide.children[0]);
      }
      carouselSlide.style.transition ="none";
      carouselSlide.style.transform = 'translateX(' + (-size) + 'px)';
      setTimeout(autoSlide, 7000);
      inMove = false;
  }
  function autoSlide(){

      if(Date.now()-lastMove>=7700)nextSlide();
      
  }
  //bButtons listener
  function nextSlide(){
      
      inMove = true;
      carouselSlide.style.transition ="transform 0.8s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size*2) + 'px)';
      setTimeout(()=>{afterSlide(1)}, 800);
      lastMove = Date.now();
  }
  nextBtn.addEventListener('click', ()=>{
      
      if(!inMove){

          nextSlide()
      }
  });
  prevBtn.addEventListener('click', () => {
      
      if(!inMove){

          inMove = true;
          carouselSlide.style.transition ="transform 0.8s ease-in-out";
          carouselSlide.style.transform = 'translateX(' + 0 + 'px)';
          setTimeout(()=>{afterSlide(-1)}, 800);
          lastMove = Date.now();
      }
  });
  setTimeout(nextSlide, 4000);
}
/*
document.addEventListener("DOMContentLoaded",()=>{

  carrouselStart();
});
*/