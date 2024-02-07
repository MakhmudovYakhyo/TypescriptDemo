export class Employee {
    empId: number;
    empName: string;
    empDepNum: number;

    constructor(eid: number, ename: string, deptno: number) {
        this.empId = eid;
        this.empName = ename;
        this.empDepNum = deptno;
    }

    setData(id: number, name: string, dno: number): void {
        this.empId = id;
        this.empName = name;
        this.empDepNum = dno;
    }

    display() {
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empDepNum);
    }
}

/* var emp = new Employee(); // object creation
emp.empId = 101;
emp.empName = "John";
emp.empDepNum = 11;
emp.display();

emp.setData(100, "Jack", 10);
emp.display(); */

var emp = new Employee(100, "Jack", 10);
emp.display();