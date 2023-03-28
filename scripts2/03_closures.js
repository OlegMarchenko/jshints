function createCalcFunc(n) {
  return function () {
    console.log(1000 * n)
  }
}

const calc = createCalcFunc(5); // calc функція котру ми отримуємо з іншої функції з замкнутим значенням
calc();


function createIncrementor(n) {
  return function (num) {
    return n + num
  }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(15)





function urlGenerator(domain) {
  return function (url) {
    console.log(`https://${url}.${domain}`)
  }
}

const comUrl = urlGenerator('com')
const plUrl = urlGenerator('pl')

console.log(comUrl('facebook'));
console.log(comUrl('google'));


function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function logPerson() {
  console.log(`${this.name} works as ${this.job} developer`)
}

const person1 = {
  name: 'Max',
  job: 'Backend'
}

const person2 = {
  name: 'Oleg',
  job: 'Frontend'
}

bind(person1, logPerson)()
bind(person2, logPerson)()






