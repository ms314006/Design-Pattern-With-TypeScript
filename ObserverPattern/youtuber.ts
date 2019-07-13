interface IObserver {
  update(videoName: string): void;
}

interface IYoutuber {
  registerObservers(o: IObserver): void;
  removeObservers(o: IObserver): void;
  notifyObserver(): void;
}

class Youtuber implements IYoutuber {
  private observers: Array<IObserver>

  public name: string

  constructor(name: string) {
    this.name = name;
    this.observers = [];
  }

  registerObservers(o: IObserver): void {
    this.observers.push(o);
  }

  removeObservers(o: IObserver): void {
    const targetIndex = this.observers.indexOf(o);
    this.observers.splice(targetIndex, 1);
  }

  notifyObserver(): void {
    this.observers.forEach(observer => observer.update(`${this.name} 有新影片了！`));
  }

  publishVideo() {
    this.notifyObserver();
  }
}

class Observer implements IObserver {
  update(content: string): void {
    console.log(content);
  }
}

// == 建立 Youtuber 的實體 ==
const aGa = new Youtuber('蔡阿嘎');
const gao = new Youtuber('老高');

// == 建立 Observer 的實體 ==
const observer = new Observer();

console.log('== 分別訂閱蔡阿嘎和老高 ==');
aGa.registerObservers(observer);
gao.registerObservers(observer);

console.log('== 當蔡阿嘎和老高發佈新影片 ==');
aGa.publishVideo();
gao.publishVideo();

console.log('== 取消訂閱蔡阿嘎 ==');
aGa.removeObservers(observer);

console.log('== 蔡阿嘎發佈新影片 ==');
aGa.publishVideo();

console.log('== 再訂閱蔡阿嘎 ==');
aGa.registerObservers(observer);

console.log('== 蔡阿嘎發佈新影片 ==');
aGa.publishVideo();
