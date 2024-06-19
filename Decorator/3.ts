// 可以通过返回一个新的构造函数来替换原有的构造函数，从而修改类的实例化过程。
function replaceConstructor<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log('Instance created');
    }
    say() {
      console.log('Hello2, I am');
    }
  };
}

@replaceConstructor
class User {
  constructor(public name: string) {}
  say() {
    console.log('Hello1, I am', this.name);
  }
}

const user = new User('Alice');
user.say();
