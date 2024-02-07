function Greet(greeting, name) {
    return greeting + "  " + name;
}
console.log(Greet("Welcome", "John")); //OK
//console.log(Greet("Welcome"));  // Compiler error
//console.log(Greet("Welcome", "John", "Smith"));  // Compiler error
/*
Optional parameteres
*/
function Greeting(greeting, name) {
    return greeting + "  " + name;
}
console.log(Greeting("Welcome")); //OK
console.log(Greeting("Welcome", "John"));
//console.log(Greeting("Welcome", "John", "Smith"));  // Compiler error
/*
Default parameteres
*/
function Greetings(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name;
}
console.log(Greetings("John")); // OK, returns "Hello John"
console.log(Greetings("John", "Welcome")); // OK, returns "Welcome John"
console.log(Greetings("Smith")); // OK, returns "Hello Smith"
