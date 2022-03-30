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
var Brand = /** @class */ (function () {
    function Brand(bname, mname, price) {
        this.brandName = bname;
        this.modelName = mname;
        this.price = price;
    }
    Brand.prototype.displayBrand = function () {
        console.log(this.brandName);
    };
    return Brand;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(mname, price) {
        return _super.call(this, "Apple", mname, price) || this;
    }
    Apple.prototype.printAllDetails = function () {
        this.displayBrand();
        console.log(this.modelName, this.price);
    };
    return Apple;
}(Brand));
var product1 = new Apple("Iphone 12", 90000);
product1.printAllDetails();
var Vivo = /** @class */ (function (_super) {
    __extends(Vivo, _super);
    function Vivo(mname, price) {
        var _this = _super.call(this, "Vivo", mname, price) || this;
        _this.rating = 4.5;
        return _this;
    }
    Vivo.prototype.printDetails = function () {
        this.displayBrand();
        console.log(this.modelName, this.price, this.rating);
    };
    return Vivo;
}(Brand));
var vivo1 = new Vivo("VivoA23 pro", 40000);
vivo1.printDetails();
