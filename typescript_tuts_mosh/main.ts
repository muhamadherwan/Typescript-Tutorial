// # Wanlab Mosh Typescript Tutorial #
// # Date:10 Jan 2020 #
// # Basic Type Script
function log(message) {
  console.log(message);
}

var message = "hello wanlab";

log(message);

// #1.Variable Type declaration
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3]; // array
let f: any[] = [1, true, "a", false]; // array(not a good practice)

// normal constant
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// change the above constant to Enum format:
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3
}
let backgroundColor = Color.Red; // exp. enum usage

// #2.Type Assertions
let msg;
msg = "abc";
let endWithC = (<string>msg).endsWith("C"); //common way
let alternativeWay = (msg as string).endsWith("C"); // alternative way todo it

// #3.Arrow Function
// normal function format:
let log1 = function(message) {
  console.log(message);
};

// Above function in  arrow function format:
let doLog1 = message => console.log(message);
// if dont have any parameter
let doLog2 = () => console.log();

// #4.Interfaces
// set the Point as an interface
interface Point {
  x: number;
  y: number;
}

//how to use it
let drawPoint = (point: Point) => {
  //...
};

drawPoint({
  x: 1,
  y: 2
});
