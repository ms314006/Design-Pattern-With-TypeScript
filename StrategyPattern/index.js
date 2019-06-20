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
var CanFly = /** @class */ (function () {
    function CanFly() {
    }
    CanFly.prototype.fly = function () {
        return '我會飛';
    };
    return CanFly;
}());
var CanNotFly = /** @class */ (function () {
    function CanNotFly() {
    }
    CanNotFly.prototype.fly = function () {
        return '我不會飛';
    };
    return CanNotFly;
}());
var RocketFly = /** @class */ (function () {
    function RocketFly() {
    }
    RocketFly.prototype.fly = function () {
        return '用火箭飛';
    };
    return RocketFly;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        return '呱呱呱呱';
    };
    return Quack;
}());
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        return '磯磯磯';
    };
    return Squeak;
}());
var MachineQuack = /** @class */ (function () {
    function MachineQuack() {
    }
    MachineQuack.prototype.quack = function () {
        return '我是機器模擬出來的鴨子叫聲';
    };
    return MachineQuack;
}());
var Duck = /** @class */ (function () {
    function Duck(name, quackBehavior, flyBehavior) {
        this.name = name;
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }
    Duck.prototype.display = function () {
        return "\u6211\u662F" + this.name;
    };
    Duck.prototype.swim = function () {
        return this.name + "\u6703\u6E38\u6CF3";
    };
    Duck.prototype.quack = function () {
        return this.quackBehavior.quack();
    };
    Duck.prototype.fly = function () {
        return this.flyBehavior.fly();
    };
    Duck.prototype.setQuackBehavior = function (quackBehavior) {
        this.quackBehavior = quackBehavior;
    };
    Duck.prototype.setFlyBehavior = function (flyBehavior) {
        this.flyBehavior = flyBehavior;
    };
    return Duck;
}());
// 綠鴨子
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck(name) {
        return _super.call(this, name, new Quack(), new CanFly()) || this;
    }
    return MallardDuck;
}(Duck));
// 黃色小鴨
var ToyDuck = /** @class */ (function (_super) {
    __extends(ToyDuck, _super);
    function ToyDuck(name) {
        return _super.call(this, name, new Squeak(), new CanNotFly()) || this;
    }
    return ToyDuck;
}(Duck));
var mallard = new MallardDuck('綠頭鴨');
console.log(mallard.quack());
console.log(mallard.swim());
console.log(mallard.fly());
console.log('=======分隔鴨線=======');
var toy = new ToyDuck('黃色小鴨');
console.log(toy.quack());
console.log(toy.swim());
console.log(toy.fly());
console.log('======黃色小鴨遇到野生的火箭=======');
toy.setFlyBehavior(new RocketFly());
console.log(toy.fly());
console.log('======獵人看到火箭小鴨，製作機器引誘=======');
var suckcall = new MachineQuack();
console.log(suckcall.quack());
