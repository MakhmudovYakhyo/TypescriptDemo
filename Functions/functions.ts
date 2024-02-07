/* 
Named functions
 */
export function display() {
    console.log("Welcome to typescript");
}

display();

/* 
Named function include paramter and return type
*/
function Sum(x: number, y: number): number {
    return x + y;
}

var res = Sum(10, 20);
console.log(res);

/* 
Anonymous functions
*/
var greeting = function () {
    console.log("Anonim func")
}

greeting();


/* 
Anonymous function includes parameter and return types
*/

var sum = function(x: number, y: number): number {
    return x + y;
}

console.log(sum(1,2)); //3