const people = [
  { name: 'Oleg', age: 31, budget: 35000 },
  { name: 'Anna', age: 15, budget: 25000 },
  { name: 'Anna', age: 15, budget: 25000 },
  { name: 'Lesya', age: 17, budget: 9000 },
  { name: 'Olena', age: 29, budget: 6000 },
  { name: 'Max', age: 18, budget: 12000 },
  { name: 'Katya', age: 15, budget: 2000 },
]



const arr = ['Apple', 'Orange', 'Strawberry'];
const arr2 = ['Red', 'Green', 'Blue'];

const arr3 = [...arr, ...arr2];

// console.log(arr.join(' / '))


var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];
const sorted = items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

console.log(sorted);


/*for (let i = 0; i < people.length; i++) {
  console.log('people[i]', people[i]);
}*/

/*for(let person of people) {
  console.log('person', person);
}*/

// forEach
/*people.forEach((person, index, peopleArray) => {
  console.log('person2', person)
})*/

// people.forEach(person => console.log(person))

// Map
const newPeople = people.map((person, index) => {
  // Метод позволяет преобразовивать исходний массив, можем трансформировать данние из массива
  // Служит для преобразования текущего массива в какой то новый массив
  return `${person.name} - ${person.age} років`;
})



// Filter
const adults = people.filter(person => person.age >= 18); // возвращает новый массив


// Reduce
const sumOfBudget = people.reduce((previousValue, currentValue) => previousValue + currentValue.budget, 0) // Начинаем с нуля
// Дай возможнсть сумировать данные из массива и возврразает новый массив
// console.log('sumOfBudget', sumOfBudget);

// Find
// Служит для того что бы условию мы могли найти нужный нам елемент, возвращает нолько первый найденный елемент
const findAnna = people.find(person => person.name === 'Anna');
// console.log(findAnna);


// FindIndex
const findIndex = people.findIndex(person => person.name === 'Max');
// Метод ищет значение по ключу и возвращает индекс, возвращает первый елемент
// console.log(findIndex);


// Practice
const newYearBudget = people
.filter(person => person.budget > 10000)
.map(person => {
  return {
    info: `${person.name} (${person.age})`,
    budgetPerYear: person.budget * 12,
    budgetPerDay: Math.floor(person.budget / 30)
  }
})



// console.log(newYearBudget);

