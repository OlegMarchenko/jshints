console.log('Start') // Call Stack
console.log('Start 2') // Call Stack 2

setTimeout(() => {
  console.log('Inside timeout after 5 sec') // Call Stack --> Wev API --> Callback Queue (Цикл Event Loop) --> Call Stack
}, 5000)

function afterTwoSec() {
  console.log('Inside timeout after 2 sec')
}

setTimeout(afterTwoSec, 2000)

console.log('End')


