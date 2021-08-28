const baseUrl = 'https://jsonplaceholder.typicode.com/'

fetch(baseUrl + 'todos/1')
    .then(response => response.json())
    .then(json => console.log(json))