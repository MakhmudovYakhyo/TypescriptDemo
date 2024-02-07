var first:number=12.0;
var second: number=0x37CF;
var third: number=0o377;
var fouth:number=0b111001;

console.log(first);
console.log(second);
console.log (third);
console.log(fouth);


//string

var empName:String = "John";
var empDept:string = "IT"

console.log (empName);
console.log(empDept);

var stmt:string = empName + " works in " + empDept;
console.log(stmt);

//boolean
var b:boolean = true;
console.log(b);

//void type
function hello():void {
    console.log("This is welcome message")
}


//Null - null represents a variable whose value is undefined
var num1:number = null;
num1 = 100;
console.log(num1);


//Undefined is a primitive type denotes all uninitialized variables
var num2:number = undefined;
num2 = 100;
console.log(num2);

//Any type
var val:any = "Hello";
val = 100; //ok

console.log(val);

val = true;
console.log(val);


function myFunction(a:any, b:any){
    console.log(a+b);
}

myFunction(100,200);
myFunction("Hi", ", Hello")