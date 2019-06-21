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
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
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
        var weatherData = new WeatherData();
        var currentDisplay = new CurrentConditionsDisplay(weatherData);
        weatherData.setMeasurements(80, 65, 30);
        weatherData.setMeasurements(85, 70, 35);
        weatherData.setMeasurements(69, 35, 17);
    };
    return WeatherStation;
}());
WeatherStation.main();
