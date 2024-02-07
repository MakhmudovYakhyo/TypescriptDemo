// ****** 2D Array declaration and initialization

export var myArray: number[][] = [[10, 20], [30, 40], [50, 60], [70, 80]]; //using square brackets
console.log(myArray);

// ****** 2D Multi Type Array
var myArray2: (string | number)[][] = [[10, "abc"], [20, "def"], [30, "ghi"]];
console.log(myArray2);


//Access 2D array elements
console.log(myArray2[0][0]);
console.log(myArray2[0][1]);
console.log(myArray2[1][0]);
console.log(myArray2[1][1]);

console.log("##################################")

//loop to access array elements
/* for (var i = 0; i < myArray2.length; i++) {
    for (var j = 0; j < myArray2[i].length; j++) {
        console.log(myArray2[i][j]);
    }
} */

console.log("**********************************")
for(var i in myArray2){
    for(var j in myArray2[i]){
        console.log(myArray2[i][j]);
    }
}