// 方法装饰器是一个接受三个参数的函数：
//target：装饰的目标对象，对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//propertyKey：装饰的成员名称。
//descriptor：成员的属性描述符。

// 日志记录

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('target:', target);
  console.log('propertyKey:', propertyKey);
  console.log('descriptor:', descriptor);
}

class Calcaulator {
  @log
  add(x: number, y: number) {
    return x + y;
  }

  @log
  static staticAdd(x: number, y: number) {
    return x + y;
  }
}

new Calcaulator().add(1, 2);

export {};
