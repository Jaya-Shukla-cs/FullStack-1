//selectors
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");

//event handlers
todoButton.onclick = create;
todoList.onclick = checkdelete;

//function
function create(e){
    if(todoInput.value===""){
        e.preventDefault();
        alert("Please enter the value");
    }
    else{
        e.preventDefault();
        var newdiv = document.createElement("div");
        newdiv.classList.add("todo");

        var newli = document.createElement("li");
        newli.classList.add("todo-item");
        newli.innerHTML = todoInput.value;
        newdiv.appendChild(newli);

        var checkbtn = document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML = '<i class="fa fa-check"></i>';
        newdiv.appendChild(checkbtn);

        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        newdiv.appendChild(deletebtn);
        todoList.appendChild(newdiv);
        todoInput.value = "";
    }
}

function checkdelete(e){
    var item = e.target;
    if(item.classList[0]==="delete-btn"){
        var parent = item.parentNode;
        parent.remove();
    }
    if(item.classList[0]==="check-btn"){
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }
}