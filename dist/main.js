"use strict";
// const log = <T, B>(val: T, val2: B): T => {
//   console.log(val);
//   console.log(val2);
//   return val;
// };
// log<string, number>('строка', 1);
// log(5, 15);
// function log2<T>(val: T): T {
//   console.log(val);
//   return val;
// };
// log2<string>('строка');
// log2<boolean>(!!5);
// const arr: Array<string> = ['a', 'b', 'c'];
const filterArr = (arr, exclude) => arr.filter((item) => !exclude.includes(item));
const result = filterArr([1, 2, 3, 4, 5], [2, 4]);
console.log('result: ', result);
