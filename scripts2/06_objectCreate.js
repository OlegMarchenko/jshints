// Object.create(), getter, setter
const person = Object.create(
  {
  calculateAge() { // Можемо указать прототип нового созданого оьʼєкта
    return new Date().getFullYear() - this.birthYear
  }
},
  {
  name: {
    // Property Descriptors
    value: 'Anna',
    enumerable: true, // Visibility Key
    writable: true, // Change property value
    configurable: true // Можемо видаляти який небудь ключ з обʼєкта
  },
  birthYear: {
    value: 1990
  },
  age: {
    get() { // Працює як звичаний обʼєкт
      return new Date().getFullYear() - this.birthYear
    },
    set(v) {
      // Можемо дивитися за змінненям значень обʼєкта
      console.log('Set age:', v);
    }
  }
})

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

console.log(person);