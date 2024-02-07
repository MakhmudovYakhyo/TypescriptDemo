function Greet(greeting) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greeting + " " + name.join(", ");
}
console.log(Greet("Hello", "John"));
console.log(Greet("Hello"));
console.log(Greet("Hello", "John", "Smith"));
console.log(Greet("Hello", "John", "Smith", "Mary"));
