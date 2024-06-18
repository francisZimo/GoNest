// Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey)：定义元数据。
// Reflect.hasMetadata(metadataKey, target, propertyKey)：检查目标对象是否具有指定的元数据。
// Reflect.getMetadata(metadataKey, target, propertyKey)：获取目标对象的元数据。
// Reflect.getOwnMetadata(metadataKey, target, propertyKey)：获取目标对象的自有元数据。
// Reflect.deleteMetadata(metadataKey, target, propertyKey)：删除目标对象的元数据。

import 'reflect-metadata';

// 定义一个类
class MyClass {
  private myProperty: string;

  constructor(value: string) {
    this.myProperty = value;
  }

  // 定义一个方法，并为其添加元数据
  // @Reflect.metadata('customKey', 'customValue')
  myMethod() {
    console.log(`Executing myMethod`);
  }
}

// 实例化 MyClass
const instance = new MyClass('Hello');

// 1. 定义元数据
Reflect.defineMetadata('key1', 'value1', instance, 'myProperty');

// 2. 获取元数据
const hasMetadata = Reflect.getMetadata('key1', instance, 'myProperty');
console.log(`Has metadata 'key1' for 'myProperty': ${hasMetadata}`);
