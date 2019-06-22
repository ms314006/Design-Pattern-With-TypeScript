interface Subject {
  registerObserver:(o: Observer) => void
  removeObserver:(o: Observer) => void
  notifyObserver:() => void
}

interface Observer {
  update:(temp:number, humidity:number, pressure: number) => void
}

interface DisplayElement {
  display: () => void
}

// 主題
class WeatherData implements Subject {
  observers: Array<Observer>

  temperature: number

  humidity:number

  pressure:number

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    this.observers.splice(this.observers.indexOf(o), 1);
  }

  notifyObserver() {
    // 發生改變時對所有的訂閱者執行 update
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  measurementsChanged() {
    this.notifyObserver();
  }

  setMeasurements(temperature:number, humidity:number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

// 觀察者
class CurrentConditionsDisplay implements Observer, DisplayElement {
  temperature: number

  humidity: number

  weatherData: Subject

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    // 訂閱主題
    this.dropInweather();
  }

  // 由主題執行此函式
  update(temperature: number, humidity: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`Current conditions:
      temperature:${this.temperature}
      humidity:${this.humidity}`);
  }

  dropInweather() {
    this.weatherData.registerObserver(this);
  }

  dropOutWeather() {
    this.weatherData.removeObserver(this);
  }
}

class WeatherStation {
  static main() {
    // 創建一個主題
    const weatherData: WeatherData = new WeatherData();

    // 將主題給 CurrentConditionsDisplay 訂閱
    const currentDisplay = new CurrentConditionsDisplay(weatherData);

    // 接收到資料時會觸發通知
    weatherData.setMeasurements(80, 65, 30);
    weatherData.setMeasurements(85, 70, 35);
    weatherData.setMeasurements(69, 35, 17);
    console.log('==退出訂閱主題==');
    currentDisplay.dropOutWeather();
    console.log('==已退出==');
    console.log('==以下再改變==');
    weatherData.setMeasurements(56, 32, 12);
    console.log('==以下再訂閱==');
    currentDisplay.dropInweather();
    console.log('==已訂閱==');
    console.log('==以下再改變==');
    weatherData.setMeasurements(34, 43, 8);
  }
}

WeatherStation.main();
