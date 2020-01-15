// * Types script Module Tutorial *//
// * Date:15 Jan 2020            *//

import TodoItem from "./TodoItem";

export default class TodoListModule {
  items: TodoItem[] = [];

  addTodo(newTodo: TodoItem): number {
    this.items.push(newTodo);
    return this.items.length;
  }
}

const list2 = new TodoListModule();

list2.addTodo({
  title: "zain lembab",
  isDone: false
});

console.log(list2);
