 
 
 const options = {
  method: 'POST',
  body: JSON.stringify({
    title: 'RockPadel',
    body: 'Prueba',
    userId: 1,
  }),
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then((response) => response.json())
  .then((data) => console.log(data));


 /*  
  let titulo = document.getElementById('titulo');
  let description = document.getElementById('description');
  let buscar = document.getElementById('buscar');
  let resultado = document.getElementById('resultado');


buscar.addEventListener('click', () => {
    const data = {
        titulo: titulo.value,
    body: description.value,
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    }
  
    })

    .then((response) => response.json())
    .then ((data) => {
        console.log(data);
        resultado.innerHTML =`<h1>${data.title}</h1>
        <p>${inder.body}</p>
        <p>fueron enviados correctamente</p>`
    })
    }); */