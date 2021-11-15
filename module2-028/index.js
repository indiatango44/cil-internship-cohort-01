
// const form = document.querySelector("form")
const input = document.querySelector("input")
const button = document.querySelector("button");
const todoList = document.querySelector(".todoList");


// click on the button
button.addEventListener("click", function(event) {
    
    // Because our form is submitting by default and reloading the page, we add preventDefault function to stop it from doing that.
    event.preventDefault();

    // get the input value
    let inputValue = input.value;

    // Validate input to make sure it's not empty
    if (inputValue == '') {
        alert("Please type something...")
        return
    }

    // structure your output or the item to be appended inside the todolist
    let outPut =  document.createElement("div");

    // give the div a class of todoItem
    outPut.classList ="todoItem";

    // set the value of this div to whatever value the input is
    outPut.innerHTML = inputValue

    // Append the div to our todo list
    todoList.appendChild(outPut);

    // clear the input field
    document.querySelector("input").value = "";
});
