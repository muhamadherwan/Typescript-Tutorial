// * Types script Import Tutorial *//
// * Date:15 Jan 2020            *//

import TodoListModule from "./TodoListModule";

const list3 = new TodoListModule();

list3.addTodo({
  title: "zain supa lembab",
  isDone: false
});

console.log(list3);
