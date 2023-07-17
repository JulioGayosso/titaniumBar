document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    scrollNav();
    
  });
  
  function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
  }
  
  function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion__contenedor');
    navegacion.classList.toggle('mostrar');
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
  
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
  
    function Next() {
      let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
      slider.style.marginLeft = '-200%';
      slider.style.transition = 'all 0.5s';
  
      setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
      }, 500);
    }
  
    function Prev() {
      let sliderSection = document.querySelectorAll('.slider__section');
      let sliderSectionLast = sliderSection[sliderSection.length - 1];
      slider.style.marginLeft = '0';
      slider.style.transition = 'all 0.5s';
  
      setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
      }, 500);
    }
  
    btnRight.addEventListener('click', function() {
      Next();
    });
  
    btnLeft.addEventListener('click', function() {
      Prev();
    });
  
    setInterval(function() {
      Next();
    }, 5000);
  }
  
  // Agregamos la función para la validación del formulario
  function validarFormulario(e) {
    e.preventDefault();
  
    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();
    const telefono = document.querySelector('#telefono').value.trim();
    const asunto = document.querySelector('#asunto').value.trim();
  
    if (nombre === '' || email === '' || telefono === '' || asunto === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'error');
      return;
    }
  
    mostrarAlerta('Formulario enviado correctamente', 'success');
  
    // Aquí puedes agregar la lógica para enviar el formulario
  }
  
  function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta', tipo);
  
    const formulario = document.querySelector('#formulario');
    formulario.appendChild(alerta);
  
    setTimeout(function() {
      alerta.remove();
    }, 3000);
  }
  
  // Agregamos el evento submit al formulario
  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', validarFormulario);
  
  
  //flechas
  window.addEventListener('scroll', function() {
    var scrollUp = document.getElementById('scrollUp');
    var scrollDown = document.getElementById('scrollDown');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      scrollUp.classList.add('scroll-show');
    } else {
      scrollUp.classList.remove('scroll-show');
    }
  
    if (scrollPosition < (document.documentElement.scrollHeight - window.innerHeight)) {
      scrollDown.classList.add('scroll-show');
    } else {
      scrollDown.classList.remove('scroll-show');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }
  
  // Obtener referencias a los elementos
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPauseButton');
  
  // Agregar evento de clic al botón
  playPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
      audioPlayer.play(); // Reproducir la canción si está pausada
    } else {
      audioPlayer.pause(); // Pausar la canción si está reproduciéndose
    }
  });