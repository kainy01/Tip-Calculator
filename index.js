const billInput = document.getElementById("billInput");
const tip = document.getElementsByClassName("tip");
const numOfPll = document.getElementById("numOfPll");
const custon = document.getElementById("custom");
let bill = 0;
let ppl;
let newTip = 0;

billInput.addEventListener("input", (e) => {
  bill = parseInt(e.target.value);
  totals();
});

for (let i = 0; i < tip.length; i++) {
  tip[i].addEventListener("click", (e) => {
    newTip = parseInt(e.target.value);
    tip[i].className;

    totals();
  });
}
custon.addEventListener("input", (e) => {
  newTip = parseInt(e.target.value);
  totals();
});

numOfPll.addEventListener("input", (e) => {
  ppl = parseInt(e.target.value);
  if (ppl == 0 && !ppl) {
    document.getElementsByClassName("hidd")[0].textContent = "Can't be zero";
    document.getElementsByClassName("ppl")[0].style.outlineColor = "orange";
  } else {
    totals();
    document.getElementsByClassName("hidd")[0].textContent = "";
    document.getElementsByClassName("ppl")[0].style.outlineColor = "#26c0ab";
  }
});

function totals() {
  let tbtb = bill * (newTip / 100);
  document.getElementById("tipPerPerson").textContent =
    "$" + (tbtb / ppl).toFixed(2);
  document.getElementById("pricePerPerson").textContent =
    "$" + ((tbtb + bill) / ppl).toFixed(2);
}

const resett = document.getElementById("res");

resett.addEventListener("click", myFunction)
function myFunction(){
  billInput.value = 0;
  numOfPll.value = 1;
  custon.value = 0;
  document.getElementById("tipPerPerson").textContent = "00.00";
  document.getElementById("pricePerPerson").textContent = "00.00";
};
