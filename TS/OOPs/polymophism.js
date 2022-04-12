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
var Brands = /** @class */ (function () {
    function Brands() {
    }
    Brands.prototype.dispaly = function () {
        console.log(this.bname, this.price, this.qty, this.stock);
    };
    return Brands;
}());
var AppleBrand = /** @class */ (function (_super) {
    __extends(AppleBrand, _super);
    function AppleBrand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bname = "Apple";
        _this.panme = "Macbook Air";
        _this.price = 75000;
        _this.qty = 10;
        _this.stock = true;
        return _this;
    }
    AppleBrand.prototype.dispaly = function () {
        console.log("This is going to print all the Macbook Details");
        console.log(this.bname, this.panme, this.price, this.qty, this.stock);
        console.log("Mackbook Total Amount is " + this.price * this.qty);
    };
    return AppleBrand;
}(Brands));
var VivoBrand = /** @class */ (function (_super) {
    __extends(VivoBrand, _super);
    function VivoBrand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bname = "Vivo";
        _this.pname = "Vivo A23 Pro";
        _this.price = 40000;
        _this.qty = 8;
        _this.stock = false;
        return _this;
    }
    VivoBrand.prototype.display = function () {
        //   super.dispaly()
        console.log("Vivo A23 Total Amount is : " + this.price * this.qty);
    };
    return VivoBrand;
}(Brands));
var apple1 = new AppleBrand();
apple1.dispaly();
var vivo1 = new VivoBrand();
vivo1.display();
