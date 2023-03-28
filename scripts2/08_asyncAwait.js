const url = 'https://jsonplaceholder.typicode.com/todos';



async function fetchTodos() {
  try {
    console.log('Start fetching')
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data:', data)
  } catch (e) {
    console.error('Error:', e)
  } finally {
    console.log('Finally!')
  }

}

fetchTodos();
