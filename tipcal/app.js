// add event listners to maincontainer
let maincontainer = document.getElementById("container");
maincontainer.addEventListener("input", calculateAll);

//define the calculateAll function
// place the calculations in the right locations in the dom

function calculateAll() {
  // take the full bill
  let totalBillAmount = document.getElementById("full-bill").value;
  //take the percentage of tip
  let tippercentage = document.getElementById("tipPercentage").value;
  //take the amountOfFreinds
  let amountOfFreinds = document.getElementById("amountOfFreinds").value;

  //place to append the calculated values
  let tipDisplay = document.getElementById("tip-display");
  let freinds = document.getElementById("freinds");
  let tipPrice = document.getElementById("tipPrice");
  let total = document.getElementById("total");
  let tipeach = document.getElementById("tipeach");
  let totalPerPerson = document.getElementById("totalPerPerson");

  //calculatios
  let tipValue = Math.round((totalBillAmount * tippercentage) / 100);
  let totalPay = Math.round(+totalBillAmount + +tipValue);
  let tipEach = Math.round(tipValue / amountOfFreinds);
  let totalEach = Math.round(totalPay / amountOfFreinds);

  //injecting
  tipDisplay.innerHTML = tippercentage;
  tipPrice.innerHTML = tipValue;
  total.innerHTML = totalPay;
  freinds.innerHTML = amountOfFreinds;
  tipeach.innerHTML = tipEach;
  totalPerPerson.innerHTML = totalEach;
}
