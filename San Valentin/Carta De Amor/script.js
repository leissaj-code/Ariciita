const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");
const contenedor = document.querySelector("#AbrirContenedor");

// Función para animar título y párrafo
function animarTituloYParrafo(haciaArriba = true) {
  const h1 = document.querySelector("h1");
  const p = document.querySelector(".psorpresa");
  const desplazamiento = haciaArriba ? "-120px" : "0px";

  h1.style.transform = `translateY(${desplazamiento})`;
  p.style.transform = `translateY(${desplazamiento})`;
  h1.style.transition = "transform 0.65s ease-in-out";
  p.style.transition = "transform 0.65s ease-in-out";
}

// Abrir Carta
function abrirCarta() {
  const ElementoSuperior = document.querySelector(".superior");
  const ElementoMensaje = document.querySelector(".mensaje");
  const IconoCorazon = document.querySelector(".bx");

  ElementoSuperior.classList.add("abrir-superior");
  IconoCorazon.classList.add("bx-rotada");
  animarTituloYParrafo(true);

  setTimeout(() => {
    ElementoSuperior.style.zIndex = -1;
    contenedor.classList.add("contenedor-abrir"); // permite ver el mensaje completo
    ElementoMensaje.classList.add("abrir-mensaje");
  }, 700);
}

// Cerrar Carta
function cerrarCarta() {
  const ElementoSuperior = document.querySelector(".superior");
  const ElementoMensaje = document.querySelector(".mensaje");
  const IconoCorazon = document.querySelector(".bx");

  ElementoMensaje.classList.remove("abrir-mensaje");
  contenedor.classList.remove("contenedor-abrir"); // oculta el desbordamiento

  setTimeout(() => {
    animarTituloYParrafo(false);
    ElementoSuperior.style.zIndex = 0;
    ElementoSuperior.classList.remove("abrir-superior");
    IconoCorazon.classList.remove("bx-rotada");
  }, 700);
}

// Asignar eventos
btnAbrir.addEventListener("click", abrirCarta);
btnCerrar.addEventListener("click", cerrarCarta);
contenedor.addEventListener("click", abrirCarta);
