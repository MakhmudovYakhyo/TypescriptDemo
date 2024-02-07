class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employer extends Person{
    empno:number;

    constructor(empno:number, name:string){
        super(name);
        this.empno=empno;
    }

    displayData():void{
        console.log(this.empno);
        console.log(this.name)
    }
}

var empObj  = new Employer(101,"John");
empObj.displayData();
