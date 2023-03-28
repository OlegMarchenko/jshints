

class Animal { // По конвенції класи називаєм з великої літери

  static type = 'Animal' // Якщо метод статичний то він доступний тільки у самого класса

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }
  voice() {
    console.log('A am Animal!');
  }
}

/*
const animal = new Animal({
  name: 'Animal',
  age: 10,
  hasTail: true
})*/

class Cat extends Animal {
  static type = 'Cat'
  constructor(options) {
    super(options); // В super ми повинні передати опції класса анімал
    this.color = options.color;
  }
  voice() {
    super.voice(); // Визиває батьківський метод voice
    console.log('A am Cat!');
  }
  get ageInfo() {
    return this.age * 7
  }
  set ageInfo(newAge) {
    this.age = newAge
  }
}


const cat = new Cat({
  name: 'Cat',
  age: 2,
  hasTail: true,
  color: 'black'
})

class Car {
  constructor(options) {
    this.year = options.year;
    this.model = options.model;
    this.wheels = options.wheels;
    this.engine = options.engine;
  }
}


class Bmw extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
}

const bmwX5 = new Bmw({
  year: 2020,
  model: 'X5',
  wheels: 4,
  engine: 'v8',
  color: 'black'
})


const bmwX3 = new Bmw({
  year: 2022,
  model: 'X3',
  wheels: 4,
  engine: 'v4',
  color: 'red'
})



class Person {
  constructor(name) {
    this.setName(name);
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw 'The name cannot be empty';
    }
    this.name = newName;
  }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName());





// Practice
