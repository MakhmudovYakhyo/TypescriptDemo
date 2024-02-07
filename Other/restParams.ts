export function Greet(greeting:string, ...name:string[]){
    return greeting+" "+name.join(", ");
}

console.log(Greet("Hello","John"));
console.log(Greet("Hello"));

console.log(Greet("Hello","John", "Smith"));
console.log(Greet("Hello","John", "Smith", "Mary"));
