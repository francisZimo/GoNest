import 'reflect-metadata';

// 类装饰器
function Role(role: string) {
  return Reflect.metadata('role', role);
}

// 方法装饰器
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    return originalMethod.apply(this, args);
  };
}

// 属性装饰器
function Format(format: string) {
  return Reflect.metadata('format', format);
}

@Role('admin')
class User {
  @Format('email')
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  @Log
  getUserInfo() {
    return `User email: ${this.email}`;
  }
}

const user = new User('test@example.com');

// 获取类的元数据
const role = Reflect.getMetadata('role', User);
console.log(`Role: ${role}`); // 'Role: admin'

// 获取属性的元数据
const emailFormat = Reflect.getMetadata('format', User.prototype, 'email');
console.log(`Email format: ${emailFormat}`); // 'Email format: email'

// 调用方法，触发日志输出
console.log(user.getUserInfo());
