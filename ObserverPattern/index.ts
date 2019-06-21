interface Subject {
  registerObserver:(o: Observer) => void
  removeObserver:(o: Observer) => void
  notifyObserver:() => void
}

interface Observer {
  update:(temp:Number, humidity:Number, pressure: Number) => void
}

interface DisplayElement {
  display: () => void
}

// 主題
class WeatherData implements Subject {
  observers: Array<Observer>

  temperature: Number

  humidity:Number

  pressure:Number

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
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  measurementsChanged() {
    this.notifyObserver();
  }

  setMeasurements(temperature:Number, humidity:Number, pressure: Number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  temperature: Number

  humidity: Number

  weatherData: Subject

  constructor(weatherData: WeatherData) {
    this.temperature = 0;
    this.humidity = 0;
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: Number, humidity: Number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`Current conditions:
      temperature:${this.temperature}
      humidity:${this.humidity}`);
  }
}

class WeatherStation {
  static main() {
    const weatherData: WeatherData = new WeatherData();
    const currentDisplay = new CurrentConditionsDisplay(weatherData);
    weatherData.setMeasurements(80, 65, 30);
    weatherData.setMeasurements(85, 70, 35);
    weatherData.setMeasurements(69, 35, 17);
  }
}

WeatherStation.main();
