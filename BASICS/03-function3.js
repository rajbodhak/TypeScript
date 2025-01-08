"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkUnder5orNot = function (num) {
    if (num > 5) {
        return "Greater than 5";
    }
    else if (num === 5) {
        return "Equal to 5";
    }
    else {
        return "Less than 5";
    }
};
// console.log(checkUnder5orNot(785));
// console.log(checkUnder5orNot(4));
// console.log(checkUnder5orNot(5));
var heroes = ["superman", "batman", "flash"];
var heroesMessage = heroes.map(function (hero) {
    return "The Hero is ".concat(hero);
});
console.log(heroesMessage);
