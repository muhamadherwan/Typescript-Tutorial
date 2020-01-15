// * Types script Interface & Class Tutorial *//
// * Date:15 Jan 2020                       *//

interface TodoItem {
  title: string;
  isDone: boolean;
}

class TodoList {
  items: TodoItem[] = [];

  addTodo(newTodo: TodoItem): number {
    this.items.push(newTodo);
    return this.items.length;
  }
}

const list = new TodoList();

list.addTodo({
  title: "zain lembab",
  isDone: false
});

console.log(list);
