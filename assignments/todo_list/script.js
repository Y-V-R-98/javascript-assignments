var input = document.querySelector('input');
var button = document.querySelector('button');
var todos = document.querySelector('div.todos');

let count = 0;

button.addEventListener('click',function() {
    if(input.value) {
        var newTodo = document.createElement('p');
        newTodo.innerHTML = input.value;
        newTodo.setAttribute('key',count++)
        todos.appendChild(newTodo);
        newTodo.addEventListener('click',function(e) {
            todos.removeChild(e.target);
        })
        input.value = "";
    }
})