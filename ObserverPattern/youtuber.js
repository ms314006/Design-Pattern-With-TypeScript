var Youtuber = /** @class */ (function () {
    function Youtuber(name) {
        this.name = name;
        this.observers = [];
    }
    Youtuber.prototype.registerObservers = function (o) {
        this.observers.push(o);
    };
    Youtuber.prototype.removeObservers = function (o) {
        var targetIndex = this.observers.indexOf(o);
        this.observers.splice(targetIndex, 1);
    };
    Youtuber.prototype.notifyObserver = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this.name + " \u6709\u65B0\u5F71\u7247\u4E86\uFF01"); });
    };
    Youtuber.prototype.publishVideo = function () {
        this.notifyObserver();
    };
    return Youtuber;
}());
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.update = function (content) {
        console.log(content);
    };
    return Observer;
}());
// == 建立 Youtuber 的實體 ==
var aGa = new Youtuber('蔡阿嘎');
var gao = new Youtuber('老高');
// == 建立 Observer 的實體 ==
var observerA = new Observer();
var observerB = new Observer();
console.log('== 分別訂閱蔡阿嘎和老高 ==');
aGa.registerObservers(observerA);
gao.registerObservers(observerA);
aGa.registerObservers(observerB);
console.log('== 當蔡阿嘎和老高發佈新影片 ==');
aGa.publishVideo();
gao.publishVideo();
console.log('== 取消訂閱蔡阿嘎 ==');
aGa.removeObservers(observerA);
console.log('== 蔡阿嘎發佈新影片 ==');
aGa.publishVideo();
console.log('== 再訂閱蔡阿嘎 ==');
aGa.registerObservers(observerA);
console.log('== 蔡阿嘎發佈新影片 ==');
aGa.publishVideo();
