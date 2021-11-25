
const form = document.querySelector("form")
const input = document.querySelector("input")
const button = document.querySelector("button");
const todoList = document.querySelector(".todoList");



form.addEventListener("submit", function(event) {
    
    
    let inputValue = input.value;

    if (inputValue == '') {
        alert("Please type something...")
        return
    }

    addTodo(inputValue);
});

document.addEventListener("DOMContentLoaded", fetchTodos);

function fetchTodos(){
 axios.get("https://jsonplaceholder.typicode.com/todos")
 .then(response => {
    //  get todos from response
     let allTodos = response.data;

    // structure your output or the item to be appended inside the todolist
    let output = '';

    // loop through the array of todos
    allTodos.forEach(todo => {
        output += `<div class="todoItem"> 
        ${todo.title}
        </div>`;
    });


    // Append the div to our todo list
    todoList.innerHTML = output;

     console.log(allTodos);
 }).catch(err => console.log(err))
}

function addTodo(todo){

    let data = {
        id: 210 + Math.floor(Math.random() * 2000),
        title: todo,
        completed: false,
        userId: 212 + Math.floor(Math.random() * 2000)
    }

 axios.post("https://jsonplaceholder.typicode.com/todos", data)
 .then(response => {
   
     let singleTodo = response.data;

     let div =  document.createElement("div");

    div.classList ="todoItem";

    div.innerHTML = singleTodo.title

    todoList.prepend(div);

    document.querySelector("input").value = "";

 }).catch(err => console.log(err))
}
