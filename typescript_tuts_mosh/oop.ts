// # Wanlab Mosh Typescript Tutorial #
// # Date:11 Jan 2020 #
// # 5.OOP / Class.
// # Group of variables (properties) and functions (methods) that are highly related.
class Point {
  //private y: number;
  // constructor. use '?' to make the parameter optional to fill
  constructor(private _x?: number, private _y?: number) {}

  // getter properties:give outside access to read only private variable value.
  get x() {
    return this.x;
  }

  // setter propeties: give outside access to set the private variable value with validation.
  set x(value) {
    if (value < 0) throw new Error("value cannot be less then 0.");
    this.x = value;
  }

  // methods
  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();
