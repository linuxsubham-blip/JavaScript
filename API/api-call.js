async function API(){
    const api = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await api.json();
    console.log(data)
}

API();
