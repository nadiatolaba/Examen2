let caja = document.querySelector(".container");
let numeroDivs = document.querySelector(".inputNumber");

let btnCrear = document.querySelector(".btnCrear");
btnCrear.addEventListener("click", () => {
  let divCreado = numeroDivs.value;
  crearDivs(divCreado);
});

function crearDivs(divCreado) {
  for (let i = 0; i < divCreado; i++) {
    let divCreado = document.createElement("div");
    caja.appendChild(divCreado).classList.add("divCreado");
  }
}
