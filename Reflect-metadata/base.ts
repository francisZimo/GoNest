import 'reflect-metadata';

@Reflect.metadata('role', 'admin')
class User {
  constructor(public name: string) {}
}

const role = Reflect.getMetadata('role', User);
console.log(role, '==role'); // 'admin'
