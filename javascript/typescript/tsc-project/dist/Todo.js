"use strict";
function toggleTodo(todo) {
    if (todo.completed == true) {
        todo.completed = false;
    }
    else {
        todo.completed = true;
    }
    return todo;
}
let task1 = {
    id: 1,
    title: "work",
    completed: false
};
console.log(toggleTodo({
    id: 1,
    title: "work",
    completed: false
}));
