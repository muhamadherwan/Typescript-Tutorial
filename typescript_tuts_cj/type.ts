let numbers: number[] = [1, 2, 3];

numbers.push(7);

console.log(numbers);

interface TodoItem {
  title: string;
  isDone: boolean;
}

let items: TodoItem[] = [];

items.push({
  title: "Learn TypeScript",
  isDone: false
});
