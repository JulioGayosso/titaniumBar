window.addEventListener("scroll", function() {
    var navegacion = document.querySelector(".navegacion");
    var header = document.querySelector(".header");
    var alturaHeader = header.offsetHeight;
  
    if (window.pageYOffset > alturaHeader) {
      navegacion.classList.add("fijo");
    } else {
      navegacion.classList.remove("fijo");
    }
  });
  