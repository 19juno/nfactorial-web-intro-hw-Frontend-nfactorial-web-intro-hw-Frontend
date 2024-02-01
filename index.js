console.log("salem alem");

// 1.  Встроенная функция `setTimeout` использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция `delay(ms)` должна возвращать промис, который перейдёт в состояние «выполнен» через `ms` миллисекунд,
// так чтобы мы могли добавить к нему `.then`:
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

// 2. Можно ли "перевыполнить" промис?
// Что выведет код ниже?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

// promise.then(alert);
// выведется первый resolve, второй будет игнорироваться, так как  у промиса только один итог/результат/ошибка

// 3. Промисы: сравните then и catch
// Являются ли фрагменты кода ниже эквивалентными?
// Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2);

// promise.then(f1, f2);

// в случае первого кода: если  сработает f1, в это время catch проигнорируется
// в случае error сработает catch

// во втором же коде  если сработает f1 значит все норм, если будет  f2 будет error , выдаст ошибку.  /// но в ответе решение по-другому
// поэтому я решила проверить наглядно

//1 case
const myPromise = new Promise((resolve, reject) => {
  // resolve("Everything is good");
  reject("Errror");
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 2 case
const oneMorePromise = new Promise((resolve, reject) => {
  //resolve("Everything is good");
  reject("Errror");
});

oneMorePromise.then(
  (error) => {
    console.log(error);
  },
  (result) => {
    console.log(result);
  }
);

// они одинаковы, Карл , почему в решении написано что они не эквивалентны

///

// let promise2 = new Promise((resolve, reject) => {
//   resolve("Success!");
// });

// promise2.then(
//   () => {
//     throw new Error("Errror");
//   },
//   () => {
//     console.log("ok");
//   }
// );
