// 主題
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        this.observers.splice(this.observers.indexOf(o), 1);
    };
    WeatherData.prototype.notifyObserver = function () {
        var _this = this;
        // 發生改變時對所有的訂閱者執行 update
        this.observers.forEach(function (observer) {
            observer.update(_this.temperature, _this.humidity, _this.pressure);
        });
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObserver();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
// 觀察者
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    // 由主題執行此函式
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current conditions:\n      temperature:" + this.temperature + "\n      humidity:" + this.humidity);
    };
    return CurrentConditionsDisplay;
}());
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
    }
    WeatherStation.main = function () {
        // 創建一個主題
        var weatherData = new WeatherData();
        // 將主題給 CurrentConditionsDisplay 訂閱
        var currentDisplay = new CurrentConditionsDisplay(weatherData);
        // 接收到資料時會觸發通知
        weatherData.setMeasurements(80, 65, 30);
        weatherData.setMeasurements(85, 70, 35);
        weatherData.setMeasurements(69, 35, 17);
        console.log('==退出訂閱主題==');
        currentDisplay.weatherData.removeObserver(currentDisplay);
        console.log('==已退出==');
        console.log('==以下再改變==');
        weatherData.setMeasurements(56, 32, 12);
        console.log('==以下再訂閱==');
        currentDisplay.weatherData.registerObserver(currentDisplay);
        console.log('==已訂閱==');
        console.log('==以下再改變==');
        weatherData.setMeasurements(34, 43, 8);
    };
    return WeatherStation;
}());
WeatherStation.main();
