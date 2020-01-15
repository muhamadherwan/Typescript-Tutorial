"use strict";
// * Types script Import Tutorial *//
// * Date:15 Jan 2020            *//
exports.__esModule = true;
var TodoListModule_1 = require("./TodoListModule");
var list3 = new TodoListModule_1["default"]();
list3.addTodo({
    title: "zain supa lembab",
    isDone: false
});
console.log(list3);
