var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");


    // create li tag with text node
    if (todo_item.value.length > 0) {
        var li = document.createElement('li')
        var liText = document.createTextNode(todo_item.value)
        li.appendChild(liText)
    }else{
        alert("You must write something!")
    }
    li.setAttribute("class", "li1")

    // create delete button
    var delBtn = document.createElement("img")
    delBtn.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-1432400-1211078.png")
    delBtn.setAttribute("id", "img1")
    // var delText = document.createTextNode("")



    delBtn.setAttribute("onclick", "deleteItem(this)")

    // create edit button
    var editBtn = document.createElement("img");
    editBtn.setAttribute("src", "https://icons-for-free.com/iconfiles/png/512/svg+create+edit+edit+file+office+pencil+writing+creativ+icon-1320185158722776676.png")
    editBtn.setAttribute("id", "img2")

    editBtn.setAttribute("onclick", "editItem(this)")

   
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""




}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = prompt("Enter updated value",)
    e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}