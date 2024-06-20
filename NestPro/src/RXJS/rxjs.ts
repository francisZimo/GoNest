import { Observable, from, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const observable = new Observable((subscriber) => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

observable.subscribe((value) => console.log(value));

// Operators (操作符)：

// 操作符是用于转换、过滤和组合 Observable 的函数。RxJS 提供了丰富的操作符来处理数据流，如 map、filter、merge、concat、switchMap 等。
const numbers = from([1, 2, 3, 4, 5]);
const squareOdd = numbers.pipe(
  filter((n) => n % 2 !== 0),
  map((n) => n * n)
);

squareOdd.subscribe((value) => console.log(value));

// Subject 是一种特殊的 Observable，它既是 Observable 也是 Observer。可以用来多播值给多个订阅者。
const subject = new Subject();

subject.subscribe((value) => console.log(`Observer A: ${value}`));
subject.subscribe((value) => console.log(`Observer B: ${value}`));

subject.next('Hello');
subject.next('World');
