function logClass(constructor: Function) {
  console.log('Class created:', constructor.name);
  console.log('cc:', constructor);
}

@logClass
class Person {
  constructor(public name: string) {}
}

new Person('John');

// let s: number = 1;
// s += 1;
// debugger;
// console.log(s);
