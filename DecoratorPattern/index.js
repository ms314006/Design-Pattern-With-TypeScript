var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.size = 'M';
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    Beverage.prototype.setSize = function (size) {
        this.size = size;
    };
    Beverage.prototype.getSize = function () {
        return this.size;
    };
    return Beverage;
}());
// 抽象類別裝飾者繼承抽象類別 Beverage
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
// 飲料也繼承 Beverage
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = 'Espresso';
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 40;
    };
    return Espresso;
}(Beverage));
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = 'House Blend';
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return 60;
    };
    return HouseBlend;
}(Beverage));
// 裝飾者繼承 CondimentDecorator 要實作 cost 和 description
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Mocha";
    };
    Mocha.prototype.cost = function () {
        return this.beverage.cost() + 10;
    };
    return Mocha;
}(CondimentDecorator));
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Soy";
    };
    Soy.prototype.cost = function () {
        switch (this.beverage.getSize()) {
            case 'L':
                return this.beverage.cost() + 100;
            case 'M':
                return this.beverage.cost() + 10;
            case 'S':
                return this.beverage.cost() + 5;
            default:
                throw new Error('No have size');
        }
    };
    return Soy;
}(CondimentDecorator));
var beverage = new Espresso();
console.log(beverage.getDescription() + " $ " + beverage.cost());
// 被裝飾
var beverage1 = new HouseBlend();
beverage1 = new Mocha(beverage1);
console.log(beverage1.getDescription() + " $ " + beverage1.cost());
var beverage2 = new HouseBlend();
beverage2.setSize('L');
beverage2 = new Soy(beverage2);
console.log(beverage2.getDescription() + " $ " + beverage2.cost());
