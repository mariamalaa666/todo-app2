const todoList = document.getElementById("todo-list");
const formTodo = document.getElementById("form-todo");
const inputTodoList = document.getElementById("input-todo-list");
const allBtn = document.getElementById("all");
const toDoBtn = document.getElementById("to-do");
const doneBtn = document.getElementById("done");
let items = document.querySelectorAll("#todo-list li");
const spanAll = document.getElementById("span-number-all");
const spanTodo = document.getElementById("span-number-todo");
const spanDone = document.getElementById("span-number-done");
let itemsChecked = document.querySelectorAll("#todo-list li.checked");
const ul = document.getElementById("todo-list");

todoList.addEventListener("click" , todoFunction);
function todoFunction (e) {
    console.log(e.target.nodeName);
    if (e.target.nodeName === "LI") {
        e.target.classList.toggle("checked");
        countNumber();
    }
    if (e.target.nodeName === "BUTTON"){
        todoList.removeChild(e.target.parentElement);
        countNumber();
    }
}

formTodo.addEventListener("submit" , addFuntian);
function addFuntian (event) {
    event.preventDefault ();
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div class ="div-flex">
    <button type="submit" class="toggle-btn">
            <img src="img/Component 1.png">
                        </button>
                        <button type="submit" class="toggle-btn2">
                                <img src="img/Component 2.png">
                        </button>
    <span>${formTodo.task.value}</span> 
    </div>
    <button type="submit" class="delete-btn">
        ✕
  </button>`
  if (formTodo.task.value == ""){
    return;
  }
  todoList.appendChild(listItem);
  formTodo.reset();
  countNumber();
}

toDoBtn.addEventListener("click" , todoBtnFunction);
function todoBtnFunction (){
    for (let element of items){
        if (element.classList.contains("checked")){
            element.classList.add("hide");
        }
        else{
            element.classList.remove("hide");
        }
    }
    toDoBtn.classList.add("active");
    allBtn.classList.remove("active");
    doneBtn.classList.remove("active");
}

doneBtn.addEventListener("click" , doneBtnFunction);
function doneBtnFunction (){
    for (let element of items){
        if (element.classList.contains("checked")){
            element.classList.remove("hide");
        }
        else{
            element.classList.add("hide");
        }
    }
    toDoBtn.classList.remove("active");
    allBtn.classList.remove("active");
    doneBtn.classList.add("active");
}

allBtn.addEventListener("click" , allBtnFunction);
function allBtnFunction (){
    for (let element of items){
        if (element.classList.contains("checked")){
            element.classList.remove("hide");
        }
        else{
            element.classList.remove("hide");
        }
    }
    toDoBtn.classList.remove("active");
    allBtn.classList.add("active");
    doneBtn.classList.remove("active");
}

function countNumber () {
    items = document.querySelectorAll("#todo-list li");
    let allCount = items.length;
    let todoCount = 0;
    let doneCount = 0;
    for (let elementsChecked of items) {
        if (elementsChecked.classList.contains("checked")){
            doneCount++;
        } else{
            todoCount-=-1;
        }
    }
    spanTodo.innerHTML = `(${todoCount})`;
    spanDone.innerHTML = `(${doneCount})`;
    spanAll.innerHTML = `(${allCount})`;
}
countNumber();