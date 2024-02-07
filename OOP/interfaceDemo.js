var employee = {
    empName: "John",
    empId: 101,
    empSal: 5000,
    dispData: function () {
        console.log(this.empName + " " + this.empId + " " + this.empSal);
    }
};
console.log(employee.empName);
console.log(employee.empId);
console.log(employee.empSal);
employee.dispData();
