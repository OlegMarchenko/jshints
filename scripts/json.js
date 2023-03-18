
const container = document.querySelector('.container');

const url = `https://jsonplaceholder.typicode.com/photos`;

async function getData() {
  const res = await fetch(`${url}`);
  const data = await res.json();
  console.log(data);
}

getData();