// # Wanlab Mosh Typescript Tutorial #
// # Date:11 Jan 2020 #
// #9.Modules: Add 'export' syntax to define the class as modules(use in other files)
export class Point {
  // constructor. use '?' to make the parameter optional to fill
  constructor(private _x?: number, private _y?: number) {}

  // methods
  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }
}
