//wanlab 1st typescript
function log(message) {
    console.log(message);
}
var message = "hello wanlab";
log(message);
//Type declaration
var a;
var b;
var c;
var d;
var e = [1, 2, 3]; // array
var f = [1, true, "a", false]; // array(not a good practice)
// normal constant
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
//change the above constant to Enum format:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red; // exp. usage
