//Código para el submenu de servicios
function desplegar(){
	//alias para escribr en corto a quién queremos alterar
	const elemento = document.querySelector('.dropdown-content');
	//obtener en qué estatus está la propiedad display del elemento
	const estilo = getComputedStyle(elemento).display;

	//si está en none (oculta)
	if(estilo == "none")
		elemento.style.display="block"; //lo mostramos
	else
		elemento.style.display="none"; //volver a ocultar
}

//Codigo para el Slideshow
let slideIndex = 1;
showSlides(slideIndex);

//dirección de las diapositivas (-1 regresa, 1 aumenta)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//seleccionar una diapositiva
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("punto");
  //Si estamos en la última diapositiva, regresar a la 1ra
  if (n > slides.length)
  	slideIndex = 1;
  //Si estamos en la primera, ir a la última
  if (n < 1)
  	slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //ocultar todas las diapositivas
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //quitarle a todos los puntos su estatus activo
  }
  slides[slideIndex-1].style.display = "block";  //mostrar la diapositivia correspondiente
  dots[slideIndex-1].className += " active"; //activar el punto correspondiente
}