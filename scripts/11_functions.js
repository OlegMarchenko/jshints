// Function Declaration
function getName(a = 0, b = 1, c = 0) {
  const result = a + b + c;

  console.log(result);
}

getName(10, 20, 30);


function random(number = 1) {

  let num = 20;

  return Math.floor(Math.random() * number + num);
}


console.log(random(100));
console.log(random(300));
console.log(random(1245));
console.log(random(5467654));

function getParams(a, b, ...params) {
  console.log(params);
}

getParams(10, 20, 12, 50, 35);


// Function Expression
const result = function (a = 1, b = 1) {
  return a + b;
}


console.log(result(3, 5));

const arrowFunction = (a, b, c) => {
  return a + b + c;
}

// IIFE


(
  function (a) {
    console.log(`"Your name is:" ${a}`)
  }
)();

console.log('------')

// Рекусрія

function countDown(number) {

  // вывод в консоль
  console.log(number);

  // уменьшаем значение на один
  const newNumber = number - 1;

  // условие выхода
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);

function isPerfectNumber(num) {
  let divisors = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors += i;
    }
  }

  return divisors === num;
}

console.log(isPerfectNumber(8)); // true (because number 6 is equal sum of its divisors: 1 + 2 + 3) console.log(isPerfectNumber(18)); // false


function calculateArea(length, width = length) {
  return length * width;
}

console.log(calculateArea(10));











