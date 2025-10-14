interface ToDo{
    id:number,
    title:string,
    completed:boolean
}
function toggleTodo(todo:ToDo):ToDo{
     if(todo.completed==true){
            todo.completed=false
        }
        else{
            todo.completed=true
        }
    return todo
}

let task1:ToDo={
    id:1,
    title:"work",
    completed:false
}

console.log(toggleTodo({
    id:1,
    title:"work",
    completed:false
}))