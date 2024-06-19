function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log('The method args are:', args.join(', '));
    const result = originalMethod.apply(this, args);
    console.log('The return value is:', result);
    return result;
  };
  return descriptor;
}
class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }

  @log
  sayHello(name: string) {
    console.log('Hello:', name);
  }
}

const calc = new Calculator();
calc.add(2, 3);
calc.sayHello('Alice');
