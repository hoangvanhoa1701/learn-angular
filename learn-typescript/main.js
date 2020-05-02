//// Cac kieu trong typescript
var a;
var b;
var c;
var e;
var f = ['a', 'b', 'c']; // array string and number[], boolean, any[]
var g;
var h;
var j; // function mes
var k;
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var red = Color.GREEN;
//// TyoeAssertion
var stringArray = [];
// stringArray.
stringArray.push('Nova hamso');
console.log({ stringArray: stringArray });
var drawPoint = function (point) {
    console.log("draw a X: " + point.x + " and Y: " + point.y);
    // ...
};
drawPoint({
    x: 3,
    y: 2
});
// fix quy tac cohesion
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.drawPoint2 = function () {
        console.log("draw a X: " + this.x + " and Y: " + this.y);
    };
    return Point2;
}());
// c1
var pointc1 = new Point2(1, 2);
// c2
var pointc2 = new Point2(1, 2);
// use
pointc2.drawPoint2();
// public co the tro vao sua x va y
pointc2.x = 4;
pointc2.y = 6;
//// Access Modifiers: Pub;ic, Private, Protected
// Cach viet private 
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.drawPoint2 = function () {
        console.log("draw a X: " + this.x + " and Y: " + this.y);
    };
    return Point3;
}());
var pointc3 = new Point3(1, 2);
pointc3.drawPoint2();
// private ko co the tro vao sua x va y
// pointc3.x = 4; // se error
