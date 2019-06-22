// 從遊戲外掛取得練等資訊，要用兩三種方法顯示角色練功狀態
// 外掛主題
var GameData = /** @class */ (function () {
    function GameData() {
        this.observers = [];
        this.exp = 0;
    }
    GameData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    GameData.prototype.removeObserver = function (o) {
        this.observers.splice(this.observers.indexOf(o), 1);
    };
    GameData.prototype.notifyObserver = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.exp);
        });
    };
    GameData.prototype.setExpData = function (exp) {
        this.exp = exp;
        this.notifyObserver();
    };
    return GameData;
}());
// 顯示角色練功狀態
var GameCurrentConditionDisplay = /** @class */ (function () {
    function GameCurrentConditionDisplay() {
        this.exp = 0;
    }
    GameCurrentConditionDisplay.prototype.update = function (exp) {
        this.exp = exp;
        this.display();
    };
    GameCurrentConditionDisplay.prototype.display = function () {
        console.log("\u5F97\u5230\u7D93\u9A57\u503C: " + this.exp);
    };
    return GameCurrentConditionDisplay;
}());
// 顯示角色得到的總經驗值
var GameCurrentTotalDisplay = /** @class */ (function () {
    function GameCurrentTotalDisplay() {
        this.exp = 0;
    }
    GameCurrentTotalDisplay.prototype.update = function (exp) {
        this.exp += exp;
        this.display();
    };
    GameCurrentTotalDisplay.prototype.display = function () {
        console.log("\u7576\u524D\u5F97\u5230\u7E3D\u7D93\u9A57\u503C\u70BA: " + this.exp);
    };
    return GameCurrentTotalDisplay;
}());
var GameStation = /** @class */ (function () {
    function GameStation() {
    }
    GameStation.main = function () {
        // 創建主題
        var gameData = new GameData();
        // 創建訂閱者
        var gameCurrentConditionDisplay = new GameCurrentConditionDisplay();
        gameData.registerObserver(gameCurrentConditionDisplay);
        var gameCurrentTotalDisplay = new GameCurrentTotalDisplay();
        gameData.registerObserver(gameCurrentTotalDisplay);
        // 得到經驗值
        gameData.setExpData(2);
        gameData.setExpData(4);
        gameData.setExpData(7);
        gameData.setExpData(3);
        gameData.setExpData(4);
    };
    return GameStation;
}());
GameStation.main();
