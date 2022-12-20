const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2")
const soma = document.getElementById("btn-plus");
const times = document.getElementById("btn-times");
const clear = document.getElementById("btn-clear");
const result = document.getElementById("result-box");

num1.addEventListener("change", handleNum1);
num2.addEventListener("change", handleNum2);
soma.addEventListener("click", handleSum);
times.addEventListener("click", handleTimes);
clear.addEventListener("click", handleClear);

function handleNum1(e) {
  if(isNumber(num1.value)) {
    e.target.classList.remove("input-error")
  } else {
    e.target.classList.add("input-error")
  }
}

function handleNum2(e) {
  if(isNumber(num2.value)) {
    e.target.classList.remove("input-error")
  } else {
    e.target.classList.add("input-error")
  }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function handleSum() { 
  const sum = Number(num1.value) + Number(num2.value);
  if(isNumber(sum)) {
    result.innerHTML = sum;
  }
}

function handleTimes() {
  const sum = Number(num1.value) * Number(num2.value);
  if(isNumber(sum)) {
    result.innerHTML = sum;
  }
}

function handleClear() {
  result.innerHTML = 0;
  num1.value = "";
  num2.value = "";
}





