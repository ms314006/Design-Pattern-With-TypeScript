
interface ISkill {
  useSkill(): void;
}

class Robot {
  public name: string;

  private skill: ISkill;

  constructor(name: string, skill: ISkill) {
    this.name = name;
    this.skill = skill;
  }

  public useSkill():void {
    console.log(`${this.name} 使出：`);
    this.skill.useSkill();
  }

  public setSkill(skill: ISkill):void {
    this.skill = skill;
  }
}

class Gun implements ISkill {
  useSkill():void {
    console.log('普通射擊！');
  }
}

class Scissors implements ISkill {
  useSkill():void {
    console.log('剪刀攻擊！');
  }
}

const rockMan = new Robot('洛克人', new Gun());

const scissorsMan = new Robot('剪刀人', new Scissors());

// 洛克人攻擊
rockMan.useSkill();

// 剪刀人攻擊
scissorsMan.useSkill();

console.log('洛克人打爆剪刀人');
console.log('搶過剪刀人的能力，切換能力');

rockMan.setSkill(new Scissors());

rockMan.useSkill();
