// #5.Class.
// # Group of variables (properties) and functions (methods) that are highly related.
var Point = /** @class */ (function () {
    // constructor. use '?' to make the parameter optional to fill
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        // getter properties:give outside access to read only private variable value.
        get: function () {
            return this.x;
        },
        // setter propeties: give outside access to set the private variable value with validation.
        set: function (value) {
            if (value < 0)
                throw new Error("value cannot be less then 0.");
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    // methods
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
