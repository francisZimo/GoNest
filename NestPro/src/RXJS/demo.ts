import { of, from, interval, Subject } from 'rxjs';
import { map, filter, switchMap, take, catchError } from 'rxjs/operators';

// 创建一个简单的 Observable
const observable = of(1, 2, 3, 4, 5);

observable
  .pipe(
    filter((x) => x % 2 === 0),
    map((x) => x * x)
  )
  .subscribe((value) => console.log(`Filtered and squared: ${value}`));

// // 从数组创建 Observable
// const arrayObservable = from([10, 20, 30, 40, 50]);

// arrayObservable
//   .pipe(
//     map((x) => x / 10),
//     take(3)
//   )
//   .subscribe((value) => console.log(`Mapped and taken: ${value}`));

// // 使用 interval 创建定时 Observable
// const intervalObservable = interval(1000);

// intervalObservable
//   .pipe(
//     take(5),
//     switchMap((val) => of(`Interval value: ${val}`))
//   )
//   .subscribe((value) => console.log(value));

// // 使用 Subject 进行多播
// const subject = new Subject();

// subject.subscribe((value) => console.log(`Observer A: ${value}`));
// subject.subscribe((value) => console.log(`Observer B: ${value}`));

// subject.next('Hello');
// subject.next('World');
