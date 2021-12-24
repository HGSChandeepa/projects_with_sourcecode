var newRace = document.querySelector(".headding");
newRace.style.color = "yellow";
var elementcrate = document.createElement("h1");
var insidetext = document.createTextNode("TIP CALCULATOR");
var samin = elementcrate.appendChild(insidetext);
newRace.innerHTML = samin.textContent;

var inputedVal;

// this we get all the places that user can input a val
function getVal() {
  let billAmount = document.getElementById("fullBill").value;
  let tipPercentage = document.getElementById("tip-percentage").value;
  let peopleRange = document.getElementById("peopleRange").value;
  let tipPrice = document.getElementById("tipPrice");
  let tipDisplay = document.getElementById("tipDisplay");
  let total = document.getElementById("total");
  let aountOfMembers = document.getElementById("aountOfMembers");
  let billEachmen = document.getElementById("billEach");
  let totalPerPerson = document.getElementById("totalPerPerson");

  let tipValue = (billAmount * tipPercentage) / 100;
  let totalToPay = +billAmount + +tipValue;
  let billEach = totalToPay / peopleRange;
  let tipEach = tipValue / peopleRange;

  tipDisplay.innerHTML = tipPercentage;
  tipPrice.innerHTML = tipValue;
  total.innerHTML = totalToPay;
  aountOfMembers.innerHTML = peopleRange;
  billEachmen.innerHTML = tipEach;
  totalPerPerson.innerHTML = billEach;
}

// run the function in side js file

let container = document.getElementById("container");
container.addEventListener("input", getVal);
