//Type Aliases
var coordinates = function (pt) {
    console.log("The X coordinate is: " + pt.x);
    console.log("The Y coordinate is: " + pt.y);
};
coordinates({ x: 458, y: 858 });
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
