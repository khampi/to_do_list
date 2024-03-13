

const input = document.getElementById("input");
const list = document.getElementById("todolist");

document.getElementById("button").onclick = onclick;

const sche = [];
function onclick() {
    sche.push(input.value);
    input.value=" ";
    display();
}

function display() {
    list.innerHTML = " ";
    sche.forEach(function(n,i){
        list.innerHTML +=
        "<li>" +
        n+
        "<a onclick='edit(" +
        i +
        ")'>Edit</a>" +
        "<a onclick='deleteList(" +
        i +
        ")'>&times | </a></li>";


    });
}

function deleteList(i) {
    sche.splice(i,1);
    display();
}

function edit(i){
    const newInput = prompt("Update your schedule");
    sche.splice(i,1,newInput);
    display();
}