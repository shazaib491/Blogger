// fetch("https://jsonplaceholder.typicode.com/todos").then((Response) => {
//     console.log(Response)
//     Response.json().then(data => {
//         console.log(data)
//     }).catch(error => {
//         console.log(error)
//     })
// }).catch(error => {
//     console.log(error);
// })


async function callTodo(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

callTodo('https://jsonplaceholder.typicode.com/todos');