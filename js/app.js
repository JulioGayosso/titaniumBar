document.addEventListener('DOMContentLoaded',function(){

    eventListeners();
    slider();
    navegacionFija();
    scrollNav();

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


// Función para aplicar la navegación fija
function navegacionFija() {
  const barra = document.querySelector('.navegacion');
  const sobreFestival = document.querySelector('.bienvenida__heading');
  /* const body = document.querySelector('body'); */

  window.addEventListener('scroll', function() {
    
    if (sobreFestival.getBoundingClientRect().bottom < 0) {
      
      barra.classList.add('fijo');
     /*  body.classList.add('body-scroll');  */
    } else {
      
     barra.classList.remove('fijo');
      /* body.classList.remove('body-scroll');  */
    } 
  });
}

// Función para desplazarse suavemente al hacer clic en los enlaces de navegación
function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion__contenedor a');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
    
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: 'smooth' });
    });
  });
}