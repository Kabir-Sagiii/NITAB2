var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Productss = /** @class */ (function () {
    function Productss() {
        this.productName = "Macbook";
        this.productPrice = 75000;
        this.avability = true;
        this.productCategory = "Apple";
        this.Qty = 5;
    }
    Productss.prototype.getDetails = function () {
        this.TotalAmount();
        console.log(this.productCategory, this.productName, this.avability, this.productPrice);
    };
    Productss.prototype.TotalAmount = function () {
        return this.Qty * this.productPrice;
    };
    return Productss;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        var _this = _super.call(this) || this;
        _this.brandName = "Apple";
        return _this;
    }
    Apple.prototype.print = function () {
        this.getDetails();
        console.log(this.brandName, this.productName, this.productPrice);
    };
    return Apple;
}(Productss));
var product1 = new Productss();
product1.productPrice = 90000;
//  product1.avability = false
product1.getDetails();
