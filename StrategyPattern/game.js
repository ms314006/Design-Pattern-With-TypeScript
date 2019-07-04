var Robot = /** @class */ (function () {
    function Robot(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    Robot.prototype.useSkill = function () {
        console.log(this.name + " \u4F7F\u51FA\uFF1A");
        this.skill.useSkill();
    };
    Robot.prototype.setSkill = function (skill) {
        this.skill = skill;
    };
    return Robot;
}());
var Gun = /** @class */ (function () {
    function Gun() {
    }
    Gun.prototype.useSkill = function () {
        console.log('普通射擊！');
    };
    return Gun;
}());
var Scissors = /** @class */ (function () {
    function Scissors() {
    }
    Scissors.prototype.useSkill = function () {
        console.log('剪刀攻擊！');
    };
    return Scissors;
}());
var rockMan = new Robot('洛克人', new Gun());
var scissorsMan = new Robot('剪刀人', new Scissors());
// 洛克人攻擊
rockMan.useSkill();
// 剪刀人攻擊
scissorsMan.useSkill();
console.log('洛克人打爆剪刀人');
console.log('搶過剪刀人的能力，切換能力');
rockMan.setSkill(new Scissors());
rockMan.useSkill();
