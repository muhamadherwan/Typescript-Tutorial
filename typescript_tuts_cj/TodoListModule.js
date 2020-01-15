"use strict";
// * Types script Module Tutorial *//
// * Date:15 Jan 2020            *//
exports.__esModule = true;
var TodoListModule = /** @class */ (function () {
    function TodoListModule() {
        this.items = [];
    }
    TodoListModule.prototype.addTodo = function (newTodo) {
        this.items.push(newTodo);
        return this.items.length;
    };
    return TodoListModule;
}());
exports["default"] = TodoListModule;
var list2 = new TodoListModule();
list2.addTodo({
    title: "zain lembab",
    isDone: false
});
console.log(list2);
