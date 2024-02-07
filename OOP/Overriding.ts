export class Bank {
    rateOfInterest: number = 0;

    roi(): number {
        return this.rateOfInterest;
    }
}

class BankX extends Bank {
    roi(): number {  //overriding
        return 10.5;
    }
}

class BankY extends Bank {
    roi(): number {  //overriding
        return 12.5;
    }
}

var x = new BankX();
console.log(x.roi());
var y = new BankY();
console.log(y.roi());