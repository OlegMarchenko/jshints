// Promise - потрібен для кращої роботи з асінхронними операціями
// Обертка над асинхроністю

console.log('Request data')

const p = new Promise((resolve, reject) => { // 2 parameters are functions

  setTimeout(() => {
    console.log('Preparing data');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    };
    resolve(backendData)
  }, 2000)
});

p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modifed = true;
      resolve(data)
    }, 2000)
  })
})
.then(clientData => {
  clientData.fromPromise = true;
  return clientData;
})
.then(data => {
  console.log('Modified', data)
})
.catch(err => console.error('Error', err))
.finally(() => console.log('Finally'))


// Promise.all([]) приймає масиив промісів і виконається після того як вони усі віпрацюють
// Promise.race([]) приймає масиив промісів і виконаю найшвидший проміс