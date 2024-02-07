// ********* Array declaration and initialization

var fruits1: string[] = ["apple", "mango", "banana"];
//or

var fruits2: Array<string>; //declaration
fruits2 = ["apple", "mango", "banana"]; //initialization

console.log(fruits1);
console.log(fruits2);


//multi type array
var values: (string | number)[] = ["apple", 10, "orange", 20]
console.log(values);
//or
var values: Array<string | number> = ["banana", 30, "orange", 40]
console.log(values);



// ******** Access array elements
var fruits: string[] = ["Apple", "Orange", "Banana"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); //undefined

// ************** for loop */

for (var i = 0; i < fruits.length; i++) { //3
    console.log(fruits[i]);
}

for(var j in fruits){
    console.log(fruits[j]);
}
