// 2.2.4.2 日志记录
// 可以在访问器的 get 和 set 方法中添加日志记录，以跟踪属性的访问和修改。
// 同理可添加权限
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalGet = descriptor.get;
  const originalSet = descriptor.set;
  if (originalGet) {
    descriptor.get = function () {
      const result = originalGet.apply(this);
      console.log(`Getting value of ${propertyKey}: ${result}`);
      return result;
    };
  }
  if (originalSet) {
    descriptor.set = function (value: any) {
      console.log(`Setting value of ${propertyKey} to: ${value}`);
      originalSet.apply(this, [value]);
    };
  }
  return descriptor;
}
class User {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  @log
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}
const user = new User('Alice');
console.log(user.name); // Getting value of name: Alice
user.name = 'Bob'; // Setting value of name to: Bob
console.log(user.name); // Getting value of name: Bob

export {};
