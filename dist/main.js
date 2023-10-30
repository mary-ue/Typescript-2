"use strict";
// const log = <T, B>(val: T, val2: B): T => {
//   console.log(val);
//   console.log(val2);
//   return val;
// };
const filterArr = (arr, exclude) => arr.filter((item) => !exclude.includes(item));
const result = filterArr([1, 2, 3, 4, 5], [2, 4]);
console.log('result: ', result);
const response = {
    success: true,
    data: [
        {
            id: 21,
            title: 'Капуста',
            count: 30,
        },
        {
            id: 12,
            title: 'Морковь',
            count: 50,
        },
    ]
};
const response2 = {
    success: true,
    data: [
        {
            name: 'Иван',
            post: 'Кладовщик',
        },
        {
            name: 'Петр',
            post: 'Сторож',
        },
    ]
};
const response3 = {
    success: true,
    data: 'Заказ оформлен, номер заказа #23132',
};
