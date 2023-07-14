document.addEventListener('DOMContentLoaded',function(){

    eventListeners();
   /*  slider(); */
    scrollNav();
   /*  navegacionFija(); */

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




function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion__contenedor a');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      const seccionScroll = e.target.getAttribute('href');
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const slider = document.querySelector('#slider');
  let sliderSection = document.querySelectorAll('.slider__section');
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  
  
  const btnLeft = document.querySelector('#btn-left');
  const btnRight = document.querySelector('#btn-right');
  
  slider.insertAdjacentElement('afterbegin',sliderSectionLast);
  
  function Next() {
      let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      
      setTimeout(function(){
          slider.style.transition = 'none';
          slider.insertAdjacentElement('beforeend',sliderSectionFirst);
          slider.style.marginLeft = "-100%";
  
      },500);
  }
  
  
  function Prev() {
      let sliderSection = document.querySelectorAll('.slider__section');
      let sliderSectionLast = sliderSection[sliderSection.length - 1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      
      setTimeout(function(){
          slider.style.transition = 'none';
          slider.insertAdjacentElement('afterbegin',sliderSectionLast);
          slider.style.marginLeft = "-100%";
  
      },500);
  }
  
  btnRight.addEventListener('click',function(){
      Next();
  });
  
  btnLeft.addEventListener('click',function(){
      Prev();
  });
  
  setInterval(function(){
    Next()
  },5000)
  



}