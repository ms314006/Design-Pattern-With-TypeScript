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
var BowAndArrowBehavior = /** @class */ (function () {
    function BowAndArrowBehavior() {
    }
    BowAndArrowBehavior.prototype.useWeapon = function () {
        return '弓箭神鷹射擊';
    };
    return BowAndArrowBehavior;
}());
var SwordBehavior = /** @class */ (function () {
    function SwordBehavior() {
    }
    SwordBehavior.prototype.useWeapon = function () {
        return '神之寶劍光束';
    };
    return SwordBehavior;
}());
var GunBehavior = /** @class */ (function () {
    function GunBehavior() {
    }
    GunBehavior.prototype.useWeapon = function () {
        return '精準四方瞄準連發';
    };
    return GunBehavior;
}());
var Character = /** @class */ (function () {
    function Character(weaponBehavior) {
        this.weaponBehavior = weaponBehavior;
    }
    Character.prototype.fight = function () {
        return this.weaponBehavior.useWeapon();
    };
    Character.prototype.setFight = function (weaponBehavior) {
        this.weaponBehavior = weaponBehavior;
    };
    return Character;
}());
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super.call(this, new BowAndArrowBehavior()) || this;
    }
    Queen.prototype.fight = function () {
        console.log('女王攻擊！');
        return _super.prototype.fight.call(this);
    };
    return Queen;
}(Character));
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super.call(this, new SwordBehavior()) || this;
    }
    King.prototype.fight = function () {
        console.log('國王攻擊！');
        return _super.prototype.fight.call(this);
    };
    return King;
}(Character));
var queen = new Queen();
console.log(queen.fight());
var king = new King();
console.log(king.fight());
console.log('===女王切換武器「手槍」===');
queen.setFight(new GunBehavior());
console.log(queen.fight());
