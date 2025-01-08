//Array Using Square Brackets
let fruits: string[] = ["Apple", "Banana", "Orange"];

//Using Generic Array Type
let flowers: Array<string> = ["Sun Flower", "Rose", "Lotus"];
flowers.map((flower) => {
    console.log(flower);
})

//Also Array can be declared and initialized separately
let animals: Array<string>;
animals = ["Tiger", "Lion", "Dog"];

let ids: Array<number>
ids = [74, 85, 79];

//MultiType Arrays
//---Using Square Bracket 
let stirngAndNumbers: (string | number)[] = ["Hello", "Words", 1, 2, 3];
//----Using generic Array type
let numbersAndString: Array<number | string>;
numbersAndString = [2, 3, 4, 5, 5, "Hey", "Bro", "How", "Are", "You"];

