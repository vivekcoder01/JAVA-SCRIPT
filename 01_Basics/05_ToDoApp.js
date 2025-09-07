// -> list to show all todos 
// -> add to add a todos 
// -> delte to delete a todos 
// -> quit to exit all todos

let todo = [];
let req = prompt("please Enter your request");
console.log(req);
while(true){
    if(req == "quit"){
        console.log("quiting app")
    }
    if(req == "list"){
        console.log("---------");
        for(let task of todo){
            console.log(task);
        }
        console.log("-----");
    }
    else if(req == "add"){
        let task = prompt("please enter the theams you want to add ");

        todo.push(task);
        console.log("task added ");
    }
    else if(req == "Delete"){
        let idx = prompt("please enter the task ");
        todo.splice(idx,1)
    }
    req = prompt("please enter your request ")
}