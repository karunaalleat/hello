const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)
.then(response => response.json())
.then(data =>{
    const todos = document.querySelector("#user");
    data.forEach(element => {
        if(element.id <=10){
            todos.innerHTML += `
            <ul class="list-group mt-5">
               <li class="list-group-item">${element.userId}</li>
               <li class="list-group-item">${element.title}</li>
               <li class="list-group-item">${element.completed}</li>
              
            </ul>
            `;
        }
    });
    //console.log(data);
})