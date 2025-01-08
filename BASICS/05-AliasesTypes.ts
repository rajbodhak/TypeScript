//Type Aliases

type Point = {
    x: number;
    y: number;
}

const coordinates = (pt: Point) => {
    console.log("The X coordinate is: " + pt.x);
    console.log("The Y coordinate is: " + pt.y);
}

coordinates({ x: 458, y: 858 });

interface Point2 {
    x: number;
    y: number;
}

function printCoord(pt: Point2) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });