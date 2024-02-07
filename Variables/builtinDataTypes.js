var first = 12.0;
var second = 0x37CF;
var third = 255;
var fouth = 57;
console.log(first);
console.log(second);
console.log(third);
console.log(fouth);
//string
var empName = "John";
var empDept = "IT";
console.log(empName);
console.log(empDept);
var stmt = empName + " works in " + empDept;
console.log(stmt);
//boolean
var b = true;
console.log(b);
//void type
function hello() {
    console.log("This is welcome message");
}
//Null - null represents a variable whose value is undefined
var num1 = null;
num1 = 100;
console.log(num1);
//Undefined is a primitive type denotes all uninitialized variables
var num2 = undefined;
num2 = 100;
console.log(num2);
//Any type
var val = "Hello";
val = 100; //ok
console.log(val);
val = true;
console.log(val);
function myFunction(a, b) {
    console.log(a + b);
}
myFunction(100, 200);
myFunction("Hi", ", Hello");
