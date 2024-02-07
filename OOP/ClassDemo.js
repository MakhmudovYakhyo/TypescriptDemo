var Employee = /** @class */ (function () {
    function Employee(eid, ename, deptno) {
        this.empId = eid;
        this.empName = ename;
        this.empDepNum = deptno;
    }
    Employee.prototype.setData = function (id, name, dno) {
        this.empId = id;
        this.empName = name;
        this.empDepNum = dno;
    };
    Employee.prototype.display = function () {
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empDepNum);
    };
    return Employee;
}());
/* var emp = new Employee(); // object creation
emp.empId = 101;
emp.empName = "John";
emp.empDepNum = 11;
emp.display();

emp.setData(100, "Jack", 10);
emp.display(); */
var emp = new Employee(100, "Jack", 10);
emp.display();
