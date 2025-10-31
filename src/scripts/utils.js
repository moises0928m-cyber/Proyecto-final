
  let modals = document.querySelectorAll(".modals");
  let modalLugar = document.querySelector("#modal-lugar");
  let modalHuespedes = document.querySelector("#padre-cantidad");

  modals.forEach(btn => {
    btn.addEventListener("click", (e) => {
      modalLugar.classList.add("hidden");
      modalHuespedes.classList.add("hidden");
      if (btn.id === "modal1") {
        modalLugar.classList.remove("hidden");
      } else if (btn.id === "modal2") {
        modalHuespedes.classList.remove("hidden");
      }
    });
  });

// === Sumar / Restar huéspedes ===
/* padre.addEventListener("click", e => {
  if (!e.target.classList.contains("sumar") && !e.target.classList.contains("restar")) return;

  let span = e.target.parentElement.querySelector(".resultado");
  let n = parseInt(span.textContent) || 0;
  n = e.target.classList.contains("sumar") ? n + 1 : Math.max(0, n - 1);
  span.textContent = n;

  total = [...document.querySelectorAll(".resultado")]
    .reduce((a, r) => a + parseInt(r.textContent || 0), 0);

  cantidad.textContent = total ? `${total} guests` : "Add guests";
  localStorage.setItem("totalGuests", total);
});

// === Filtro por ciudad y cantidad ===
buscar.addEventListener("click", e => {
  e.preventDefault();

  let tex = input.value.trim().toLowerCase();
  let num = total;
  let filtros = stays;

  // Filtrar por ciudad o país (acepta varias palabras)
  if (tex) {
    let palabras = tex.split(" ");
    filtros = filtros.filter(s =>
      palabras.some(p =>
        s.city.toLowerCase().includes(p) || s.country.toLowerCase().includes(p)
      )
    );
  }

  // Filtrar por cantidad
  if (num > 0) {
    filtros = filtros.filter(s => num <= s.maxGuests);
  }

  mostrar(filtros);
  modal.classList.add("hidden");
}); */



  
