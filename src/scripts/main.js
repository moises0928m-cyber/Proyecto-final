import { stays } from "./stays.js";

let abrir = document.querySelector("#abrir") /* abrir el modal */
let cerrar = document.querySelector("#cerrar")/* cerrar el modal */
let modal = document.querySelector("#modal")/* el modal */
let error =document.querySelector("#cards2")
let contenedor = document.querySelector("#cards")/* divpadre de cards  */
let input = document.querySelector("#location")/* input de buscar el lugar */
let inputCant = document.querySelector("#cantidad")
let buscar = document.querySelector("#buscar")/* boton de buscar */
let contar = document.querySelector("#contar")
let padre = document.querySelector("#padre-cantidad")
let resultados = document.querySelectorAll(".resultado");

let total = parseInt(localStorage.getItem("totalGuests")) || 0;
inputCant.textContent = total ? `${total} guests` : "Add guests";

function mostrar(lista) {
  contenedor.innerHTML = "";
  if (lista.length === 0) {
    error.innerHTML = ` <div class="carta hover:scale-105 transition-transform duration-100 ">
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg"
        alt="Apartment photo"
        class="w-full h-52 object-cover rounded-2xl"
      />
      <div class="p-4">
        <div class="flex justify-between items-center text-gray-500 ">
          <span>Hijoles mi rey nose encontro lo que buscabas</span>
          <div class="flex items-center">
            <span class="text-red-500 text-lg"></span>
          </div>
        </div>
        <h3 class="mt-2 text-gray-900 font-semibold text-lg">
          Intenta con otro nombre rey
        </h3>
      </div>
    </div>`;
    contar.textContent = `0 stays`; /* desde 0*/
    return;

  }

  lista.forEach((e) => {
    contenedor.innerHTML += ` <div class="carta  hover:scale-105 transition-transform duration-100">
    <img
    src="${e.photo} "
    alt="Apartment photo"
    class="w-full h-52 object-cover rounded-2xl"/>
  <div class="p-4">
    <div class="flex justify-between items-center text-gray-500 text-sm">
       ${e.superHost ? '<span class="uppercase text-black text-xs font-bold  border border-black rounded-xl p-1 ">SUPERHOST</span>' : ''}
      <span>${e.type}.${e.beds || "?"} beds</span>
      <div class="flex items-center ">
        <span class="text-red-500 text-lg">★${e.rating} </span>
        
      </div>
    </div>
    <h3 class="mt-2 text-gray-900 font-semibold text-lg ">
      Stylist apartment in center of the city
    </h3>
   
  </div>
</div> `

  });
  contar.textContent = `${lista.length} stays`; /* cuenta del total que hay  */

  ScrollReveal().reveal('.carta', {
    distance: '30px',
    opacity: 0,
    duration: 800,
    scale: 0.95,
    easing: 'ease-in-out',
    interval: 120
  });
}
mostrar(stays);

/* filtros */
buscar.addEventListener("click", (e) => {
  e.preventDefault();
  let texLocation = input.value.trim().toLowerCase();
  let numCantidad = parseInt(inputCant.textContent) || 0;
  let filtros = stays;
  if (texLocation !== "") {
    filtros = filtros.filter((e) => {
      return (
        e.city.toLowerCase().includes(texLocation) ||
        e.country.toLowerCase().includes(texLocation)
      );
    });
  }
  if (numCantidad > 0) {
    filtros = filtros.filter((e) => numCantidad <= e.maxGuests);
  }
  mostrar(filtros);
  modal.classList.add("hidden");
});


/* total */
inputCant.textContent = total ? `${total} guests` : "Add guests";

/* se muestra el resultado en cada span */
resultados.forEach(r => r.textContent = total);

padre.addEventListener("click", (e) => {
  if (e.target.classList.contains("sumar")) total++;
  if (e.target.classList.contains("restar") && total > 0) total--;

 /*  Actualizar textos */
  inputCant.textContent = total ? `${total} guests` : "Add guests";
  resultados.forEach(r => r.textContent = total);

  /* almacen localStorage */
  localStorage.setItem("totalGuests", total);
});


/* Modal abrir y cerrar */
abrir.addEventListener("click", () => {
  modal.classList.remove("hidden")
});
cerrar.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});












