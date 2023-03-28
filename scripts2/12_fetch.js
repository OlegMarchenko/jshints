const requestURL = 'http://localhost:1337/api/restaurants';

async function sendRequest(url) {
  try {
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
  } catch (e) {
    console.error(e.error)
  }

}

sendRequest(requestURL);