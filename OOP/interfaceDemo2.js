var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.sum = function () {
        return (this.a + this.b);
    };
    C1.prototype.sub = function () {
        return (this.x - this.y);
    };
    return C1;
}());
var c = new C1();
c.a = 100;
c.b = 200;
c.x = 300;
c.y = 400;
console.log(c.sum());
console.log(c.sub());
