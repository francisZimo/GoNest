// 默认值
//2.2.5.4 注意事项
//不可直接修改属性值： 属性装饰器不能直接修改属性值或描述符，只能用于添加元数据或做一些初始化操作。

//配合其他装饰器使用： 属性装饰器通常与其他类型的装饰器（如方法装饰器、类装饰器）配合使用，以实现更复杂的功能。
function defaultValue(value: any) {
  return function (target: any, propertyKey: string) {
    console.log(target, 'target');
    let val = value;
    const getter = function () {
      return val;
    };
    const setter = function (newVal: any) {
      val = newVal;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}
class Settings {
  @defaultValue('dark')
  theme: string;
  @defaultValue(30)
  timeout: number;
}
const settings = new Settings();
console.log(settings.theme); // 输出: dark
console.log(settings.timeout); // 输出: 30
