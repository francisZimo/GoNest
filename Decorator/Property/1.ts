import 'reflect-metadata';
function required(target: any, propertyKey: string) {
  Reflect.defineMetadata('required', true, target, propertyKey);
}
class User {
  @required
  username: string;
  [k: string]: any;
}
function validate(user: User) {
  for (let key in user) {
    if (Reflect.getMetadata('required', user, key) && !user[key]) {
      throw new Error(`Property ${key} is required`);
    }
  }
}
const user = new User();
user.username = '';
validate(user); // 抛出错误：Property username is required

export {};
