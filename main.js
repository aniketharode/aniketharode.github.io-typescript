var Mobile = /** @class */ (function () {
    function Mobile(name, ram, price) {
        var _this = this;
        this.name = name;
        this.ram = ram;
        this.price = price;
        this.display = function () {
            return _this.name;
        };
        this.getName = function () {
            return _this.name;
        };
        this.setName = function (name) {
            _this.name = name;
        };
        this.name = name;
        this.price = price;
        this.ram = ram;
    }
    return Mobile;
}());
//let value = new Mobile("Iphone 6","8GB",9000);
var value1 = new Mobile("Iphone 6", "8GB");
//let value2 = new Mobile("","8GB");
console.log(value1.getName());
value1.setName("MotoG5");
console.log("new value" + value1.getName());
