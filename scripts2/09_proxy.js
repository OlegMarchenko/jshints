
const person = {
  name: 'Oleg',
  age: 31,
  job: 'Frontend'
}

const op = new Proxy(person, {
  get(target, prop) {
    return target[prop]
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target, prop) {
    return ['name', 'age', 'job'].includes(prop) // 'name' in op === true
  },
  deleteProperty(target, prop) {
    console.log('Deleting prop:', prop);
    delete target[prop];
    return true;
  }

})

// Functions

