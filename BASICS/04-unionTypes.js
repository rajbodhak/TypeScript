//Using Union Types
//In this printID function the ID can be stirng and Number
var printID = function (id) {
    if (typeof id === "number") {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase());
    }
};
printID("sdvgsvs");
printID(545454);
var greetingTravelers = function (x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and ") + "Welcome to our Location");
    }
    else {
        console.log("Hello solo travelar, " + x);
    }
};
greetingTravelers("Rahul");
greetingTravelers(["Rahul", "Rana", "Ani"]);
