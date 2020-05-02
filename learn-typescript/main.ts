//// Cac kieu trong typescript
let a: string;
let b: number;
let c: boolean;
let e: any;
let f: string[] = ['a', 'b', 'c']; // array string and number[], boolean, any[]
let g: null;
let h: string;
let j: void; // function mes
let k: undefined;
enum Color {
    RED,
    GREEN,
    BLUE
};

let red = Color.GREEN;


//// TyoeAssertion
let stringArray: string[] = [];
// stringArray.
stringArray.push('Nova hamso');
console.log({ stringArray });


//// Interface

// normal
interface Point {
    x: number,
    y: number,
}

let drawPoint = (point: Point) => { // Inline Annottation
    console.log(`draw a X: ${point.x} and Y: ${point.y}`);
    // ...
}

drawPoint({
    x: 3,
    y: 2
})

// fix quy tac cohesion
class Point2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    drawPoint2() {
        console.log(`draw a X: ${this.x} and Y: ${this.y}`);
    }
}

// c1
let pointc1: Point2 = new Point2(1, 2);
// c2
let pointc2 = new Point2(1, 2);
// use
pointc2.drawPoint2();

// public co the tro vao sua x va y
pointc2.x = 4;
pointc2.y = 6;

//// Access Modifiers: Pub;ic, Private, Protected
// Cach viet private 
class Point3 {
    constructor(private x: number, private y: number) {
    }

    drawPoint2() {
        console.log(`draw a X: ${this.x} and Y: ${this.y}`);
    }
}
let pointc3 = new Point3(1, 2);
pointc3.drawPoint2();
// private ko co the tro vao sua x va y
// pointc3.x = 4; // se error