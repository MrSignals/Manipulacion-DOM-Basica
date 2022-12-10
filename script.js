const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const form = document.querySelector("#form");
const calculo = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", calcular); // Escucha cada vez que suceda un evento y ejecutado el codigo que queramos

function calcular(event) {
  console.log({ event });
  event.preventDefault();
  const sum = input1.value + input2.value;
  resultado.innerText = "Resultado:" + sum;
}

/* function Resta() {
  const res = parseInt(input1.value) - parseInt(input2.value);
  resultado.innerText = "El resultado de la resta es: " + res;
}
function Multiplicacion() {
  const multi = parseInt(input1.value) * parseInt(input2.value);
  resultado.innerText = "El resultado de la multplicacion es: " + multi;
} */
