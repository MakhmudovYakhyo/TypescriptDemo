var y = 100;
function someFun(){
    if(true){
        var x=100;
        let z=100;
        console.log(x);
    }
    console.log(x);
    console.log(z); //error
}

console.log(x); //error
console.log(y); //ok
