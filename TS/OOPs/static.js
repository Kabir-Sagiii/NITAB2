var MobileBrand = /** @class */ (function () {
    function MobileBrand() {
        MobileBrand.brandName = "Vivo";
        this.brandPrice = 50000;
        this.brandModelName = "vivo A23";
        this.avability = true;
    }
    MobileBrand.changeBrand = function () {
        MobileBrand.brandName = "Apple";
    };
    MobileBrand.prototype.displayDetails = function () {
        console.log(MobileBrand.brandName, this.brandModelName, this.brandPrice, this.avability);
    };
    return MobileBrand;
}());
var b1 = new MobileBrand();
var b2 = new MobileBrand();
b1.brandModelName = "Vivo V23";
b2.brandModelName = "Oneplus";
MobileBrand.brandName = "Oppo";
b1.displayDetails();
b2.displayDetails();
