interface IEmployee {
    empName: string;
    empId: number;
    empSal: number;
    dispData: () => void;
}

var employee:IEmployee={
    empName:"John",
    empId:101,
    empSal:5000,
    dispData():void{
        console.log(this.empName+" "+this.empId+" "+this.empSal)
    }
}

console.log(employee.empName);
console.log(employee.empId);
console.log(employee.empSal);

employee.dispData();