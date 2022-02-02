let button = document.querySelector("#get");
let completedDiv = document.querySelector(".list");
let inProgress = document.querySelector(".getting");
button.addEventListener("click", getApi)
function getApi(){
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(output => output.json())
    .then(data => renderdata(data))
}

function renderdata(data){
    for(var i=0; i<data.length; i++){
        var elem = data[i];
        if (elem.completed===false){
            let tag = document.createElement('p')
            let text = elem.title;
            tag.innerHTML = text;
            inProgress.appendChild(tag);
        }
        else if (elem.completed===true){
            let tag = document.createElement('p')
            let text = elem.title;
            tag.innerHTML = text;
            completedDiv.appendChild(tag);
        }
    }
}