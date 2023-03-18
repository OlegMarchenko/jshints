const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const clear = document.querySelector('#clear');

const url = `https://jsonplaceholder.typicode.com/users/3`;

async function getData() {
  const res = await fetch(`${url}`);
  const data = await res.json();
  console.log(data);

  let date = new Date(Date.now() + 86400e3);
  date = date.toUTCString();


  btn.addEventListener('click', () => {
    document.cookie = `user=${data.name}; expires=${date}; max-age=10; secure`;
    /*localStorage.setItem('userID', `${data.id}`)
    localStorage.setItem('userName', `${data.name}`)
    localStorage.setItem('data', `${JSON.stringify(data)}`)

    sessionStorage.setItem('userID', `${data.id}`)
    sessionStorage.setItem('userName', `${data.name}`)
    sessionStorage.setItem('data', `${JSON.stringify(data)}`)

    let keys = Object.keys(localStorage);
    console.log(keys);*/
    /* for(let key of keys) {
       alert(`${key}: ${localStorage.getItem(key)}`);
     }*/
  });


  btn2.addEventListener('click', () => {
    /*const getUser = localStorage.getItem('userName');
    const getData = localStorage.getItem('data');
    const length = localStorage.length;
    console.log(getData);
    console.log(JSON.parse(getData));*/
  })

  clear.addEventListener('click', () => {
    localStorage.clear();
  })

}

async function getWhether() {

  const apiKey = "d9a68bb6b4900956afcb1c970b088bed";
  const tempUnit = "metric";

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=${tempUnit}`);
  const data = await response.json();

  console.log(data);

  const wheather = data.weather[0].main;

  localStorage.setItem('wheather', wheather)

}

btn.addEventListener('click', () => {
  localStorage.removeItem('wheather')
})




setInterval(() => {
  getWhether();
}, 1000)

