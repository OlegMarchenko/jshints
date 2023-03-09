
let r = 7;

// Switch case
switch (r) {
  case 3:
    console.log('Маловато');
    break;
  case 4:
    console.log('В точку!');
    break;
  case 5:
    console.log('Перебор');
    break;
  default:
    console.log("Нет таких 🥕 значений 🌵");
}

console.log(".....")

let num = 5;


if (num === 6) {
  console.log("number id 6");
} else if (num === 7) {
  console.log("number id 7");
} else if (num === 8) {
  console.log("number id 8");
} else {
  console.log("Нет таких");
}

// Ternary


const tern = num === 6 ? console.log("number 6") : console.log("number is not 6");

let age = prompt('Вік?');

let message = (age < 3) ? 'Привіт, крихітко!' : (age < 18) ? 'Вітаю!' : (age < 100) ? 'Моє шанування!' : 'Який незвичайний вік!';



