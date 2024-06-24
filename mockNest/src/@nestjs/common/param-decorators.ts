// 引入 'reflect-metadata' 库，用于元数据的反射操作
import 'reflect-metadata';
// 定义一个工厂函数 createParamDecorator，用于创建参数装饰器
export const createParamDecorator = (key: string) => {
  // 返回一个装饰器函数，该函数接受可选的 data 参数
  return (data?: any) => (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    // 获取已经存在的参数元数据，如果不存在则初始化为空数组
    const existingParameters = Reflect.getMetadata(`params`, target, propertyKey) || [];
    // 将当前参数的信息（index, key, data）添加到参数元数据中
    existingParameters[parameterIndex] = { index: parameterIndex, key, data };
    // 更新参数元数据到目标对象的属性上
    Reflect.defineMetadata(`params`, existingParameters, target, propertyKey);
  };
};
// 使用 createParamDecorator 创建 'Request' 参数装饰器
export const Request = createParamDecorator('Request');
// 使用 createParamDecorator 创建 'Req' 参数装饰器
export const Req = createParamDecorator('Req');
