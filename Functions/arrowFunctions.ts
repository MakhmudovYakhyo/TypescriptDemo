/* 
Fat arrow function
*/
export var sum = (x: number, y: number): number => {
    return x + y;
}
console.log(sum(20, 30));

/* 
Parameterless arrow function
*/

var Print = () => {
    console.log("Parameterless arrow func");
}

var Print = () => console.log("Welcome to arrow func");

Print();


/* 
If the function body consists of only one statement, then no need to curly brackets and return keyword
*/

// var sum = (x: number, y: number): number => {
//     return x + y;
// }

// var sum = (x: number, y: number) => x + y;
// console.log(sum(10,20));