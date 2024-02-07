// ********* Array declaration and initialization
var fruits1 = ["apple", "mango", "banana"];
//or
var fruits2; //declaration
fruits2 = ["apple", "mango", "banana"]; //initialization
console.log(fruits1);
console.log(fruits2);
//multi type array
var values = ["apple", 10, "orange", 20];
console.log(values);
//or
var values = ["banana", 30, "orange", 40];
console.log(values);
// ******** Access array elements
var fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); //undefined
// ************** for loop */
for (var i = 0; i < fruits.length; i++) { //3
    console.log(fruits[i]);
}
for (var j in fruits) {
    console.log(j);
    //console.log(fruits[j]);
}
