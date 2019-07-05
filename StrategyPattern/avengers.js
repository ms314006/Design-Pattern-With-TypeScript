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
var CanNotFly = /** @class */ (function () {
    function CanNotFly() {
    }
    CanNotFly.prototype.fly = function (name) {
        console.log(name + " \u4E0D\u6703\u98DB");
    };
    return CanNotFly;
}());
var FlyWithHammer = /** @class */ (function () {
    function FlyWithHammer() {
    }
    FlyWithHammer.prototype.fly = function (name) {
        console.log(name + " \u7528\u9318\u5B50\u98DB");
    };
    return FlyWithHammer;
}());
var FlyWithArmor = /** @class */ (function () {
    function FlyWithArmor() {
    }
    FlyWithArmor.prototype.fly = function (name) {
        console.log(name + " \u7A7F\u8457\u92FC\u9435\u88DD\u98DB");
    };
    return FlyWithArmor;
}());
var TheAvengers = /** @class */ (function () {
    function TheAvengers(name, flyBehavior) {
        this.name = name;
        this.flyBehavior = flyBehavior;
    }
    TheAvengers.prototype.fly = function () {
        this.flyBehavior.fly(this.name);
    };
    TheAvengers.prototype.setFlyBehavior = function (flyBehavior) {
        this.flyBehavior = flyBehavior;
    };
    return TheAvengers;
}());
var Hulk = /** @class */ (function (_super) {
    __extends(Hulk, _super);
    function Hulk() {
        return _super.call(this, '浩克', new CanNotFly()) || this;
    }
    return Hulk;
}(TheAvengers));
var Thor = /** @class */ (function (_super) {
    __extends(Thor, _super);
    function Thor() {
        return _super.call(this, '索爾', new FlyWithHammer()) || this;
    }
    return Thor;
}(TheAvengers));
var IronMan = /** @class */ (function (_super) {
    __extends(IronMan, _super);
    function IronMan() {
        return _super.call(this, '鋼鐵人', new FlyWithArmor()) || this;
    }
    return IronMan;
}(TheAvengers));
var hulk = new Hulk();
var thor = new Thor();
var ironMan = new IronMan();
hulk.fly();
thor.fly();
ironMan.fly();
hulk.fly(); // 浩克 不會飛
// 重新對浩克設定飛的行為
hulk.setFlyBehavior(new FlyWithHammer());
hulk.fly(); // 浩克 用錘子飛
