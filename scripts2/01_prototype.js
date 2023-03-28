const person = new Object(
  {
    name: 'Max',
    age: 31,
    greet() {
      console.log(`Hello ${this.name}`)
    }
  }
)

// Object prototype for person
Object.prototype.sayHello = function () {
  console.log(`Hi ${this.name}`);
}

const lena = Object.create(person);
lena.name = 'Elena'

const str = new String('String');


// Prototype - це обʼєкт за допомогою якого ми розширюємо властивості обʼєктів або классів i за
// допомогою нього можемо влаштовувати певне успадкування всередені javascript


const array = [1, 2, 3, 4, 5]

/*function multBy(arr, n) {
  return arr.map(e => e * n)
}*/

// console.log(multBy(array, 5));

Array.prototype.multBy = function (n) {

  return this.map(e => e * n) // this указує на той обʼєкт який зліва від крапки
}

console.log(array.multBy(5));





