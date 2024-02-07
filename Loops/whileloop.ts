//1 2 3 4 5 ... 10

export var i: number = 1;

while (i <= 10) {
    //statements
    console.log(i) //1 1 1 ...
    i++;
}

// 2, 4, 6, 8, 10

 i = 2;
while (i <= 10) {
    console.log(i) //2
    i += 2;
}


// 10 9 8 7 6 ... 1
 i = 10;

while (i > 0) {
    console.log(i)
    i--;
}