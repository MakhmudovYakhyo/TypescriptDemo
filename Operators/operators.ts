var x = 10;
var y = 20;

// ***************** Arithmetic operators + - * / % ** ++ --

console.log(x+y); //30
console.log(y-x); //10
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(2**2);


//x=x+1;
x++;  //post increment 11
//++x;  //pre-increment operator 11
console.log(x);

 //y=y-1;
 y--;  //--y;
 console.log(y); //19
 

 x=100;
 y=50;

x+=y; //x=x+y;
console.log(x); //150

console.log(x-=y); //100
console.log(x*=y); //5000
console.log(x/=y); //100
console.log(x%=y); //0

// ************************ Relational/comparison operators
// Always return a boolean value /true/false
// < > <= >= !=
console.log("************************ Relational/comparison operators ************************");
x=10;
y=20;

console.log(x>y); // false
console.log(x<y); //true

console.log(x>=y); 
console.log(x<=y);

console.log(x!=y); //true


// Ternary operators
console.log(x<y?x:y); //10
console.log(x>y?x:y); //20

// ********* Logical operators ************
// && || !

var a:boolean=true;
var b:boolean=false;

console.log(a && b) //false
console.log(a || b) //true

console.log(!a) //false
console.log(!b) //true



