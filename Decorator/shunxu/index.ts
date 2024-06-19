function classDecorator() {
  return function (constructor: Function) {
    console.log('Class decorator');
  };
}

function methodDecorator() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
  };
}

function accessorDecorator() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
  };
}

function propertyDecorator() {
  return function (target: any, propertyKey: string) {
    console.log('Property decorator');
  };
}

function parameterDecorator() {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    console.log('Parameter decorator');
  };
}

function parameterDecorator2() {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    console.log('Parameter decorator2');
  };
}

@classDecorator()
class Example {
  @propertyDecorator()
  prop: string;

  @accessorDecorator()
  get myProp() {
    return this.prop;
  }

  @methodDecorator()
  method(@parameterDecorator() param: any, @parameterDecorator2() param2: any) {
    console.log('Method execution');
  }
}
