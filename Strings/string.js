var myString = "Welcome to Typescript";
var myString1 = "Welcome";
//charAt()
console.log(myString.charAt(0)); //W
console.log(myString.charAt(2)); //l
//concat()
var str1 = "welcome";
var str2 = " to typescript";
var str3 = " and protractor";
console.log(str1.concat(str2).concat(str3)); //returns "welcome to typescript and protractor"
//replcae()
var str = "Typescript Programming";
console.log(str.replace('i', 'x'));
console.log(str.replace('Type', 'Java'));
//split()
var fruits = "Apple, Banana, Orange";
console.log(fruits.split(' ')); //[ 'Apple,', 'Banana,', 'Orange' ]
console.log(fruits.split(' ', 2)); //[ 'Apple,', 'Banana,' ]
console.log(fruits.split(' ', 1)); //[ 'Apple,']
//substring()
str = "Welcome";
console.log(str.substring(0, 3)); //Wel
console.log(str.substring(2, 5)); //lco
//toUpperCase() && toLowerCase()
str = "Typescript Programming";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
//trim()
str = "   welcome   ";
console.log(str.trim());
console.log("#" + str.trimStart());
console.log(str.trimEnd() + "#");
