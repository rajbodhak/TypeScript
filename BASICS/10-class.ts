// class User {
//     name: string;
//     constructor(otherName: string) {
//         this.name = otherName;
//     }
// }

// Using Parameter Properties 

//Use Parameter Properties for Simple Classes: If your class is simple and you just need to store values, using parameter properties (like in the User  class) is a great way to keep your code concise and readable.

class User {
    constructor(
        public name: string,
        public email: string
    ) {

    }
}

const userOne = new User("rahul", "rahul@123");
console.log(userOne.email);

// Using Explicit Property Initialization

// Use Explicit Initialization for Complex Logic: If you need to perform additional logic during initialization, or if you have more complex properties (like optional properties, default values, or validation), then using explicit property initialization (like in the Point class) is more appropriate.

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const pointOne = new Point(45, 74);
console.log(pointOne.x, pointOne.y);


//Here is The best Example Where we define a Rectangle class and perform some calculation like area and perimeter

class Rectangle {
    height: number;
    width: number;
    area: number;
    perimeter: number;

    constructor(height: number, width: number) {
        if (height <= 0 || width <= 0) {
            throw new Error("Height and Width must be Positive");
        }
        this.height = height;
        this.width = width;

        this.area = this.calculateArea();
        this.perimeter = this.calculatePerimeter();
    }
    private calculateArea(): number {
        return this.height * this.width;
    }

    private calculatePerimeter(): number {
        return 2 * (this.height + this.width)
    }
}

const rectangle = new Rectangle(23, 45);
console.log(rectangle);
console.log(rectangle.area, rectangle.perimeter);

export { }


