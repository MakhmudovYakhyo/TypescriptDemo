// var empId:number = 101;
// var empName:string = "John";
// var empSal:number = 5000;

/*
Declare tuple
*/
//var employee = [101,"John", 50000];
export var employee: [number, string, number] = [101, "John", 50000];
console.log(employee);

/*
Accessing tuple
*/
console.log(employee[0]); //101
console.log(employee[1]); //John
console.log(employee[2]); //50000

/* 
Add element in to tuple - push()
*/

var employee1: [number, string, number] = [101, "John", 50000]
console.log(employee1)
employee1.push(102,"Scott",70000);
console.log(employee1)

/* 
Remove elemens from tuple - pop()
*/

employee.pop();
console.log("After removing new elements: " + employee);

/* 
Update element in tuple
*/

var student: [number, string]=[101,"Smith"];
student[1]="Scott";
console.log(student); // [101, 'Scott']

/* 
Tuple Array
*/

var student1:[number,string][];
student1=[[101,"Smith"], [102, "Scott"], [103, "Mary"]];

console.log(student1[0]);
console.log(student1[1]);
console.log(student1[2]);
