const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");
const bar4 = document.querySelector("#bar4");

let contador = 1;

btnNext.addEventListener("click", () => {
  if (contador < 4) {
    contador++;
  }

  if (contador == 2) {
    circle2.classList.add("circle-active");
    bar2.classList.add("bar-active");
    btnPrev.classList.remove("disabled");
    btnPrev.classList.add("enabled");
  }

  if (contador == 3) {
    circle3.classList.add("circle-active");
    bar3.classList.add("bar-active");
  }

  if (contador == 4) {
    circle4.classList.add("circle-active");
    bar4.classList.add("bar-active");
    btnNext.classList.remove("enabled");
    btnNext.classList.add("disabled");
  }
});

btnPrev.addEventListener("click", () => {
  if (contador > 1) {
    contador--;
  }

  if (contador == 1) {
    circle2.classList.remove("circle-active");
    bar2.classList.remove("bar-active");
  }

  if (contador == 2) {
    circle3.classList.remove("circle-active");
    bar3.classList.remove("bar-active");
  }

  if (contador == 3) {
    circle4.classList.remove("circle-active");
    bar4.classList.remove("bar-active");
    btnNext.classList.add("enabled");
    btnNext.classList.remove("disabled");
  }
});
