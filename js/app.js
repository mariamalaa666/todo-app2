const todoList = document.getElementById("todo-list");
const formTodo = document.getElementById("form-todo");
const inputTdoList = document.getElementById("input-todo-list");
const allBtn = document.getElementById("all");
const toDoBtn = document.getElementById("to-do");
const doneBtn = document.getElementById("done");
const items = document.querySelectorAll("#todo-list li");
todoList.addEventListener("click" , todoFunction);
function todoFunction (e) {
    console.log(e.target.nodeName);
    if (e.target.nodeName === "LI") {
        e.target.classList.toggle("checked");
       
    }
    if (e.target.nodeName === "BUTTON"){
        todoList.removeChild(e.target.parentElement);
    }
}

formTodo.addEventListener("submit" , FormTodoFuntian);
function FormTodoFuntian (event) {
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
    <span>${formTodo.value}</span> 
    </div>
    <button type="submit" class="delete-btn">
        ✕
  </button>`
  todoList.appendChild(listItem);
}

toDoBtn.addEventListener("click" , todoBtnFunction);
function todoBtnFunction (){
    for (let element of items){
        if (element.classList.contains("checked")){
            element.classList.add("hide");
        }
    }
    toDoBtn.classList.add("active");
    allBtn.classList.remove("active");
    doneBtn.classList.remove("active");
}