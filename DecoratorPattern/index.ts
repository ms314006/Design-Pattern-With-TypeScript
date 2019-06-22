abstract class Beverage {
  description: string;

  size: string;

  constructor() {
    this.size = 'M';
  }

  public getDescription(): string {
    return this.description;
  }

  public setSize(size: string): void {
    this.size = size;
  }

  public getSize(): string {
    return this.size;
  }

  abstract cost(): number;
}

// 抽象類別裝飾者繼承抽象類別 Beverage
abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;

  abstract getDescription(): string
}

// 飲料也繼承 Beverage
class Espresso extends Beverage {
  description: string

  constructor() {
    super();
    this.description = 'Espresso';
  }

  public cost(): number {
    return 40;
  }
}

class HouseBlend extends Beverage {
  description: string

  constructor() {
    super();
    this.description = 'House Blend';
  }

  public cost(): number {
    return 60;
  }
}

// 裝飾者繼承 CondimentDecorator 要實作 cost 和 description
class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  public cost(): number {
    return this.beverage.cost() + 10;
  }
}

class Soy extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`;
  }

  public cost(): number {
    switch (this.beverage.getSize()) {
      case 'L':
        return this.beverage.cost() + 100;
      case 'M':
        return this.beverage.cost() + 10;
      case 'S':
        return this.beverage.cost() + 5;
      default:
        throw new Error('No have size');
    }
  }
}

const beverage: Beverage = new Espresso();
console.log(`${beverage.getDescription()} $ ${beverage.cost()}`);

// 被裝飾
let beverage1: Beverage = new HouseBlend();
beverage1 = new Mocha(beverage1);
console.log(`${beverage1.getDescription()} $ ${beverage1.cost()}`);

let beverage2: Beverage = new HouseBlend();
beverage2.setSize('L');
beverage2 = new Soy(beverage2);
console.log(`${beverage2.getDescription()} $ ${beverage2.cost()}`);
