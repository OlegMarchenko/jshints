const sitiesUkraine = ['Ternopil', 'Kharkiv', 'Kyiv', 'Irpin'];
const sitiesEurope = ['Brochow', 'Warszawa', 'Krakow', 'Szczecin'];

const sitiesUkraineWithPopulation = {
  Ternopil: 30,
  Kharkiv: 100,
  Kyiv: 150,
  Irpin: 35
};
const sitiesEuropeWithPopulation = {
  Brochow: 5,
  Warszawa: 120,
  Ternopil: 70,
  Krakow: 140,
};

// Spread
// Развворачивает массивы или обьекта и служит для создания новых
// console.log(...sitiesUkraine);


const allCities = [...sitiesUkraine, 'Washington', ...sitiesEurope]

console.log('allCities', allCities);


// Spread in objects
// Создали новый обьект ис помощью оператора spread развернули все ключи и по итогу создали новый обьект
console.log({ ...sitiesUkraineWithPopulation });
console.log('cities', { ...sitiesUkraineWithPopulation, ...sitiesEuropeWithPopulation });





// Practice
const numbers = [3, 5, 2, 5, 12, 45];
// console.log(Math.max(...numbers))



// Rest
// Собирает параметры
/*
function sum(a, b, ...rest) {
  console.log(rest);
  return a + b + rest.reduce((acc, el) => acc + el, 0);
}

console.log(sum(...numbers))

// Destructuring
const [a, b, ...others] = numbers;

console.log(a);
console.log(b);
console.log(others);
*/


