"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.myFunc = exports.x = void 0;
//variable
exports.x = "Welcome";
//function
function myFunc() {
    console.log("This is my function");
}
exports.myFunc = myFunc;
//class
var MyClass = /** @class */ (function () {
    function MyClass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return MyClass;
}());
exports.MyClass = MyClass;
