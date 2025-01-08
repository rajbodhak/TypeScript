//Using Union Types

//In this printID function the ID can be stirng and Number
const printID = (id: number | string) => {
    if (typeof id === "number") {
        console.log(id);
    } else {
        console.log(id.toUpperCase());
    }
}

printID("sdvgsvs");
printID(545454);


const greetingTravelers = (x: string[] | string) => {
    if (Array.isArray(x)) {
        // The join method takes each element in the array and concatenates them into a single string using the provided separator (" and " in this case).
        console.log("Hello, " + x.join(" and ") + "Welcome to our Location");
    }
    else {
        console.log("Hello solo travelar, " + x);
    }
}

greetingTravelers("Rahul");
greetingTravelers(["Rahul", "Rana", "Ani"]);