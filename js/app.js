document.addEventListener('DOMContentLoaded',function(){

    eventListeners();
    slider()
});

function eventListeners(){

    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click',navegacionResponsive);

}

function navegacionResponsive(){
   const navegacion = document.querySelector('.navegacion__contenedor');

   navegacion.classList.toggle('mostrar');

   
}

function slider(){

  var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
        delay:5000
    },
  });

}

