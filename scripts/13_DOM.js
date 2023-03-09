const pets = [
  {
    name: "Американская короткошерстная",
    description: 'Купить котят американской короткошерстной кошки от лучших заводчиков Украины с документами о происхождении, ветеринарными паспортами, прививками и гарантией можно на сайте объединения заводчиков Украины',
    location: "Київ, Київська область",
    price: "4500 грн",
    url: 'https://lapa.shop/wp-content/uploads/2023/01/aksh1.jpg'
  },
  {
    name: "Абиссинская кошка",
    description: 'Гарний ,охайний котик. Привчений до лотка,їсть сухий корм. Любить гратися. Котику майже 4 місяці.( В подарунок 2 лоточка для туалету.',
    location: "Київ, Київська область",
    price: "1500 грн",
    url: 'https://lapa.shop/wp-content/uploads/2022/04/abi-2.jpg'
  },
  {
    name: "Бенгальская кошка",
    description: 'Все вопросы обсуждаются в телефонном разговоре, а не в переписке. Большая просьба звонить с 10 до 20 часов.Елка - глазастая, красивая и яркая, но колкая, если хочешь прикоснуться. Елка из тех',
    location: "Київ, Київська область",
    price: "1 грн",
    url: 'https://lapa.shop/wp-content/uploads/2022/04/bengal-1.jpg'
  },
  {
    name: "Бурманская кошка",
    description: 'Великолепный малыш Экзот, 2 месяца Лоток и когтеточку знает без проблем. Очень ласковый и нежная мальчик. Питание : сухой корм премиум класса и натуралка. Больше фото и видео вышлю в',
    location: "Київ, Київська область",
    price: "5 000 грн",
    url: 'https://lapa.shop/wp-content/uploads/2022/04/burma-1.jpg'
  },
  {
    name: "Канадский сфинкс",
    description: 'Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео',
    location: "Київ, Київська область",
    price: "1300 грн",
    url: 'https://lapa.shop/wp-content/uploads/2022/04/ksfinks.webp'
  },
  {
    name: "Мейн-кун",
    description: 'Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео',
    location: "Київ, Київська область",
    price: "1300 грн",
    url: 'https://lapa.shop/wp-content/uploads/2022/04/meynkun.jpg'
  }
]


const out = document.querySelector('.pets__container')
const select = document.querySelector('select');
const search = document.querySelector('.inp1');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');


let newPets = [...pets];



function createCard(item) {

  // Створюємо єлементи
  let petsItem = document.createElement('div');
  let petsName = document.createElement('h3');
  let petsImg = document.createElement('img');
  let petsPrice = document.createElement('div');
  let petsDescription = document.createElement('p');
  let petsLoc = document.createElement('h5');
  let petsLink = document.createElement('a');
  petsLink.appendChild(petsImg)

  petsItem.addEventListener('click', () => {
    document.createElement('div')

  })


  // Додаємо класи
  petsItem.classList.add('pets__item');
  petsName.classList.add('pets__name');
  petsImg.classList.add('pets__img');
  petsPrice.classList.add('pets__price');
  petsDescription.classList.add('pets__description');
  petsLoc.classList.add('pets__loc');
  petsLink.classList.add('pets__link');

  // додаємо контент
  petsName.innerText = item.name;
  petsImg.setAttribute('src', item.url)
  petsPrice.innerText = item.price;
  petsDescription.innerText = item.description;
  petsLoc.innerText = item.location;
  petsLink.setAttribute('href', item.url)
  petsLink.setAttribute('target', '_blank')




  // Робимо верстку
  petsItem.append(petsLink, petsName, petsPrice, petsDescription, petsLoc)
  return petsItem;


}


pets.map((i) => {
  let newPet = createCard(i)
  out.append(newPet)
})

// сортуемо select
function createSelect(item) {
  const ress = [];

  // додаю в ress всі item.name
  item.map((item) => {
    ress.push(item.name)
  })
  // Перетворюю  ress на нову змінну без дублікатів за допомогою new Set()
  let newRess = new Set(ress)
  // Вивожу на єкран результат в select
  newRess.forEach((item) => {
    select.innerHTML += `<option value="${item}">${item}</option>`
  })

}

// Рендеримо селект спочатку
createSelect(pets)


// Це сортування по select
select.addEventListener('change', () => {
  newPets = []; // очищуюю
  out.innerHTML = ``;
  pets.forEach((item) => {
    if (item.name == select.value) {

      // якщо я щось обира. сбди записуется новезначення
      newPets.push(item)

      let newPet = createCard(item)
      out.append(newPet)
    } else if (select.value == 'всі') { // Показати всіх
      newPets.push(item)
      let newPet = createCard(item)
      out.append(newPet)
    }
  })
})


// Пошук по імені
function searchName(arr, val) {
  let newArr = [];

  arr.map((item) => {
    let lowItemName = item.name.toLowerCase();
    let lowItemValue = val.toLowerCase();
    //item.name         //search.value
    if (lowItemName.indexOf(lowItemValue) >= 0) {
      newArr.push(item)
    }
  })

  return newArr
}


// Пошук по імені і співпадінню
search.addEventListener('keyup', () => {
  out.innerHTML = ``;
  let pet = searchName(pets, search.value);
  pet.forEach((item) => {
    let newPet = createCard(item)
    out.append(newPet)
  })
})


// Сортування котів
function sortCat(revers) {


  out.innerHTML = ``;

  // Сортуємо
  let sortPet = newPets.sort((item, index) => {
    if (item.price > index.price) {
      return 1
    } else {
      return -1
    }
  })

  if (revers) sortPet.reverse();

  sortPet.map((item) => {
    let newPet = createCard(item)
    out.append(newPet)
  })

}


btn1.addEventListener('click', () => sortCat(false))
btn2.addEventListener('click', () => sortCat(true))


// Пошук по слову або букві
// let arr = ['ola', 'sasha', 'vika', 'kolya']

// arr.map((item) => {
//     if (item.indexOf('o') >= 0) console.log(item);
// })


// Прибираємо дублікати
// let a = [1, 1, 2, 3, 4, 5, 5, 10, 9, 6, 6, 6]
// let newA = new Set(a)
// console.log(newA);


