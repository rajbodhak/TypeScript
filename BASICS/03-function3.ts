const checkUnder5orNot = (num: number): string => {
    if (num > 5) {
        return "Greater than 5";
    } else if (num === 5) {
        return "Equal to 5"
    } else {
        return "Less than 5";
    }
}
// console.log(checkUnder5orNot(785));
// console.log(checkUnder5orNot(4));
// console.log(checkUnder5orNot(5));

const heroes = ["superman", "batman", "flash"];
const heroesMessage = heroes.map((hero): string => {       //Returning String in Mop Function
    return `The Hero is ${hero}`;
})
// console.log(heroesMessage);

function errorHandler(message: string): never { //never retrun 
    throw new Error(message); //In this case throw new Error but not return
}

export { }