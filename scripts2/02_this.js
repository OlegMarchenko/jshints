function hello() {
  console.log('Hello Func', this);
}

// Якщо ми визиваємо функцію 'sayHello()' або 'hello() воно вказуває на глобальний обʼєкт 'this'
// в контексте якого було визване

// 'this' указую на той обʼєкт в контексті якого було визване

const person = {
  name: 'Max',
  age: 32,
  // контекст обʼєкта 'person'
  sayHello: hello,
  sayHelloWindow: hello.bind(window), // or this
  logInfo(job, city) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Name is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`City is ${city}`)
    console.groupEnd()
  }
}

const lena = {
  name: 'Elena',
  age: 27
}

person.logInfo.bind(lena, 'Frontend', 'Kyiv')();







