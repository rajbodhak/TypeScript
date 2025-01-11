"use strict";
// class User {
//     name: string;
//     constructor(otherName: string) {
//         this.name = otherName;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// Using Parameter Properties 
//Use Parameter Properties for Simple Classes: If your class is simple and you just need to store values, using parameter properties (like in the User  class) is a great way to keep your code concise and readable.
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
var userOne = new User("rahul", "rahul@123");
console.log(userOne.email);
// Using Explicit Property Initialization
// Use Explicit Initialization for Complex Logic: If you need to perform additional logic during initialization, or if you have more complex properties (like optional properties, default values, or validation), then using explicit property initialization (like in the Point class) is more appropriate.
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var pointOne = new Point(45, 74);
console.log(pointOne.x, pointOne.y);
//Here is The best Example Where we define a Rectangle class and perform some calculation like area and perimeter
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        if (height <= 0 || width <= 0) {
            throw new Error("Height and Width must be Positive");
        }
        this.height = height;
        this.width = width;
        this.area = this.calculateArea();
        this.perimeter = this.calculatePerimeter();
    }
    Rectangle.prototype.calculateArea = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.height + this.width);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(23, 45);
console.log(rectangle);
console.log(rectangle.area, rectangle.perimeter);
