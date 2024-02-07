function Greet(greeting: string, name: string): string {
    return greeting + "  " + name;
}

console.log(Greet("Welcome", "John")); //OK
//console.log(Greet("Welcome"));  // Compiler error
//console.log(Greet("Welcome", "John", "Smith"));  // Compiler error

/* 
Optional parameteres
*/
function Greeting(greeting: string, name?: string): string {
    return greeting + "  " + name;
}

console.log(Greeting("Welcome")); //OK
console.log(Greeting("Welcome", "John"));
//console.log(Greeting("Welcome", "John", "Smith"));  // Compiler error

/* 
Default parameteres
*/
function Greetings(name: string, greeting: string = "Hello"): string {
    return greeting + " " + name;
}

console.log(Greetings("John"));  // OK, returns "Hello John"
console.log(Greetings("John", "Welcome"));  // OK, returns "Welcome John"
console.log(Greetings("Smith"));  // OK, returns "Hello Smith"


