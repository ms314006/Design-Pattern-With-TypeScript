interface WeaponBehavior {
  useWeapon: () => string
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon() {
    return '弓箭神鷹射擊';
  }
}

class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    return '神之寶劍光束';
  }
}

class GunBehavior implements WeaponBehavior {
  useWeapon() {
    return '精準四方瞄準連發';
  }
}

class Character {
  weaponBehavior: WeaponBehavior

  constructor(weaponBehavior: WeaponBehavior) {
    this.weaponBehavior = weaponBehavior;
  }

  fight() {
    return this.weaponBehavior.useWeapon();
  }

  setFight(weaponBehavior: WeaponBehavior) {
    this.weaponBehavior = weaponBehavior;
  }
}

class Queen extends Character {
  constructor() {
    super(new BowAndArrowBehavior());
  }

  fight() {
    console.log('女王攻擊！');
    return super.fight();
  }
}

class King extends Character {
  constructor() {
    super(new SwordBehavior());
  }

  fight() {
    console.log('國王攻擊！');
    return super.fight();
  }
}

const queen = new Queen();
console.log(queen.fight());

const king = new King();
console.log(king.fight());

console.log('===女王切換武器「手槍」===');

queen.setFight(new GunBehavior());
console.log(queen.fight());
