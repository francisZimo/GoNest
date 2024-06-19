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
  @Reflect.metadata('customKey', 'customValue')
  myMethod() {
    console.log(`Executing myMethod`);
  }
}

// 实例化 MyClass
const instance = new MyClass('Hello');

// 1. 定义元数据
Reflect.defineMetadata('key1', 'value1', instance, 'myProperty');

// 2. 检查是否具有指定的元数据
const hasMetadata = Reflect.hasMetadata('key1', instance, 'myProperty');
console.log(`Has metadata 'key1' for 'myProperty': ${hasMetadata}`);

// 3. 获取元数据
const metadataValue = Reflect.getMetadata('key1', instance, 'myProperty');
console.log(`Metadata 'key1' value for 'myProperty': ${metadataValue}`);

// 4. 获取自有元数据（针对方法）
const ownMetadataValue = Reflect.getOwnMetadata('customKey', instance, 'myMethod');
console.log(`Own metadata 'customKey' value for 'myMethod': ${ownMetadataValue}`);

// 5. 获取自己包括原型元数据（针对方法）
const ownMetadataValue2 = Reflect.getMetadata('customKey', instance, 'myMethod');
console.log(`Own metadata 'customKey' value for 'myMethod': ${ownMetadataValue2}`);

// 6. 删除元数据
Reflect.deleteMetadata('key1', instance, 'myProperty');
const deletedMetadata = Reflect.getMetadata('key1', instance, 'myProperty');
console.log(`Metadata 'key1' after deletion: ${deletedMetadata}`);
