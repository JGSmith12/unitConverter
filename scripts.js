const btnConvert = document.getElementById("btn-convert");
let inputEl = document.getElementById("input");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const weight = document.getElementById("weight");

console.log(length);
console.log(volume);
console.log(weight);

btnConvert.addEventListener("click", function () {
  let meters = inputEl.value / 3.281;
  let feet = inputEl.value * 3.281;
  let liters = inputEl.value * 3.785;
  let gallons = inputEl.value / 3.785;
  let kilos = inputEl.value / 2.205;
  let pounds = inputEl.value * 2.205;
  length.textContent = `${inputEl.value} meters = ${parseFloat(feet).toFixed(
    3
  )} feet | ${inputEl.value} feet = ${parseFloat(meters).toFixed(3)} meters`;
  volume.textContent = `${inputEl.value} liters = ${parseFloat(gallons).toFixed(
    3
  )} gallons | ${inputEl.value} gallons = ${parseFloat(liters).toFixed(
    3
  )} liters`;
  weight.textContent = `${inputEl.value} kilos = ${parseFloat(pounds).toFixed(
    3
  )} pounds | ${inputEl.value} pounds = ${parseFloat(kilos).toFixed(3)} kilos`;
});
