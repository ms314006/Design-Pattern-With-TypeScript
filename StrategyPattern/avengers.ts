interface IFlyBehavior {
  fly(name: string): void;
}

class CanNotFly implements IFlyBehavior {
  public fly(name: string): void {
    console.log(`${name} 不會飛`);
  }
}

class FlyWithHammer implements IFlyBehavior {
  public fly(name: string): void {
    console.log(`${name} 用錘子飛`);
  }
}

class FlyWithArmor implements IFlyBehavior {
  public fly(name: string): void {
    console.log(`${name} 穿著鋼鐵裝飛`);
  }
}

class TheAvengers {
  public name: string;

  private flyBehavior: IFlyBehavior;

  constructor(name: string, flyBehavior: IFlyBehavior) {
    this.name = name;
    this.flyBehavior = flyBehavior;
  }

  public fly(): void {
    this.flyBehavior.fly(this.name);
  }

  public setFlyBehavior(flyBehavior: IFlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }
}

class Hulk extends TheAvengers {
  constructor() {
    super('浩克', new CanNotFly());
  }
}

class Thor extends TheAvengers {
  constructor() {
    super('索爾', new FlyWithHammer());
  }
}

class IronMan extends TheAvengers {
  constructor() {
    super('鋼鐵人', new FlyWithArmor());
  }
}

const hulk = new Hulk();
const thor = new Thor();
const ironMan = new IronMan();

hulk.fly();
thor.fly();
ironMan.fly();

hulk.fly(); // 浩克 不會飛

// 重新對浩克設定飛的行為
hulk.setFlyBehavior(new FlyWithHammer());

hulk.fly(); // 浩克 用錘子飛
