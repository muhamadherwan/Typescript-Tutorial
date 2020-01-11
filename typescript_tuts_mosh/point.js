"use strict";
exports.__esModule = true;
// #9.Modules: Add 'export' syntax to define the class as modules(use in other files)
var Point = /** @class */ (function () {
    // constructor. use '?' to make the parameter optional to fill
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // methods
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
exports.Point = Point;
