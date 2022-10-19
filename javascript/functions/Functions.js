//definig the function

function wish() {
  console.log("Good Luck for the exam!");
}

//functions with one or more parameters

function wishForName(name) {
  console.log(name + "," + "Good Luck for the exam!");
  console.log(`${name} Good Luck for your exam`);
}

//create a function that returns the sum of 2 numbers

function addNumbers(num1, num2) {
  return num1 + num2;
}

//create a function that calculates the area of a circle

function calcArea(pi, radius) {
  area = pi * (radius ^ 2);
  return area;
}

//create a function that cube (x^3) the given
//elements in an array arr = [0, 1, 2, 5, 10]

function map(cubeTheNumber, arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    answer[i] = cubeTheNumber(arr[i]);
  }
  return answer;
}
function cubeTheNumber(number) {
  return number * number * number;
}

//create a function for a supper marcket that apply a equal discount
//for all the items that we buy
//you are given a array( prices=[10,20.50,400,1200,660]) of prices that a customer bought and
//the discount rate (K=20%)

function priceCalculator(k, prices) {
  let totalDiscount = 0;
  let grossTotal = 0;

  for (let i = 0; i < prices.length; i++) {
    //calculating the full total with no discount

    grossTotal = grossTotal + prices[i];

    //calculating the total discount only

    totalDiscount = totalDiscount + prices[i] * (k / 100);
  }
  return grossTotal - totalDiscount;
}

//calling the functions

// wish();
// wishForName("Jenny");
// console.log(addNumbers(2, 3));
// console.log(calcArea(3.14, 5));
// arr = [0, 1, 2, 5, 10];
// console.log(map(cubeTheNumber, arr));

K = 20;
prices = [10, 20.5, 400, 1200, 660];
console.log(priceCalculator(K, prices));

//Arrow functions

function wish() {
  console.log("Good Luck for the exam!");
}

wish = () => {
  console.log("Good Luck for the exam!");
};

wish = () => console.log("Good Luck for the exam!");
