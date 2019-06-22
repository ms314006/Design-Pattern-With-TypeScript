// 從遊戲外掛取得練等資訊，要用兩三種方法顯示角色練功狀態

// interface
interface GameSubject {
  registerObserver: (o: GameObserver) => void
  removeObserver: (o: GameObserver) => void
  notifyObserver: () => void
}

interface GameObserver {
  update: (exp: number) => void
}

interface GameDisplay {
  display: () => void
}

// 外掛主題
class GameData implements GameSubject {
  observers: Array<GameObserver>

  exp: number

  constructor() {
    this.observers = [];
    this.exp = 0;
  }

  registerObserver(o: GameObserver) {
    this.observers.push(o);
  }

  removeObserver(o: GameObserver) {
    this.observers.splice(this.observers.indexOf(o), 1);
  }

  notifyObserver() {
    this.observers.forEach((observer) => {
      observer.update(this.exp);
    });
  }

  setExpData(exp: number) {
    this.exp = exp;
    this.notifyObserver();
  }
}

// 顯示角色練功狀態
class GameCurrentConditionDisplay implements GameObserver, GameDisplay {
  exp: number

  constructor() {
    this.exp = 0;
  }

  update(exp: number) {
    this.exp = exp;
    this.display();
  }

  display() {
    console.log(`得到經驗值: ${this.exp}`);
  }
}

// 顯示角色得到的總經驗值
class GameCurrentTotalDisplay implements GameObserver, GameDisplay {
  exp: number

  constructor() {
    this.exp = 0;
  }

  update(exp: number) {
    this.exp += exp;
    this.display();
  }

  display() {
    console.log(`當前得到總經驗值為: ${this.exp}`);
  }
}

class GameStation {
  static main() {
    // 創建主題
    const gameData: GameData = new GameData();

    // 創建訂閱者
    const gameCurrentConditionDisplay: GameCurrentConditionDisplay = new GameCurrentConditionDisplay();
    gameData.registerObserver(gameCurrentConditionDisplay);
    const gameCurrentTotalDisplay: GameCurrentTotalDisplay = new GameCurrentTotalDisplay();
    gameData.registerObserver(gameCurrentTotalDisplay);

    // 得到經驗值
    gameData.setExpData(2);
    gameData.setExpData(4);
    gameData.setExpData(7);
    gameData.setExpData(3);
    gameData.setExpData(4);
  }
}

GameStation.main();
