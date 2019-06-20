interface FlyBehavior {
  fly: () => string
}
class CanFly implements FlyBehavior {
  fly() {
    return '我會飛';
  }
}
class CanNotFly implements FlyBehavior {
  fly() {
    return '我不會飛';
  }
}
class RocketFly implements FlyBehavior {
  fly() {
    return '用火箭飛';
  }
}

interface QuackBehavior {
  quack: () => string
}
class Quack implements QuackBehavior {
  quack() {
    return '呱呱呱呱';
  }
}
class Squeak implements QuackBehavior {
  quack() {
    return '磯磯磯';
  }
}
class MachineQuack implements QuackBehavior {
  quack() {
    return '我是機器模擬出來的鴨子叫聲';
  }
}

class Duck {
  quackBehavior: QuackBehavior;

  flyBehavior: FlyBehavior;

  name: string;

  constructor(name: string, quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
    this.name = name;
    this.quackBehavior = quackBehavior;
    this.flyBehavior = flyBehavior;
  }

  display() {
    return `我是${this.name}`;
  }

  swim() {
    return `${this.name}會游泳`;
  }

  quack() {
    return this.quackBehavior.quack();
  }

  fly() {
    return this.flyBehavior.fly();
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
}

// 綠鴨子
class MallardDuck extends Duck {
  constructor(name: string) {
    super(name, new Quack(), new CanFly());
  }
}

// 黃色小鴨
class ToyDuck extends Duck {
  constructor(name: string) {
    super(name, new Squeak(), new CanNotFly());
  }
}

const mallard = new MallardDuck('綠頭鴨');
console.log(mallard.quack());
console.log(mallard.swim());
console.log(mallard.fly());

console.log('=======分隔鴨線=======');

const toy = new ToyDuck('黃色小鴨');
console.log(toy.quack());
console.log(toy.swim());
console.log(toy.fly());

console.log('======黃色小鴨遇到野生的火箭=======');
toy.setFlyBehavior(new RocketFly());
console.log(toy.fly());

console.log('======獵人看到火箭小鴨，製作機器引誘=======');
const suckcall = new MachineQuack();
console.log(suckcall.quack());
