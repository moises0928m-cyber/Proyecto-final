
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




  
