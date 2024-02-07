/*
Fat arrow function
*/
var sum = function (x, y) {
    return x + y;
};
console.log(sum(20, 30));
/*
Parameterless arrow function
*/
var Print = function () {
    console.log("Parameterless arrow func");
};
var Print = function () { return console.log("Welcome to arrow func"); };
Print();
/*
If the function body consists of only one statement, then no need to curly brackets and return keyword
*/
var sum = function (x, y) {
    return x + y;
};
var sum = function (x, y) { return x + y; };
console.log(sum(10, 20));
