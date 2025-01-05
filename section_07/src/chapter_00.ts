// 제네릭

// function func(value: unknown) {
//   return value;
// }

// let num = func(10);

// if (typeof num === "number") {
//   num.toFixed();
// }

// let bool = func(true);
// let str = func("string");

// 위와 같이 타입 좁히기를 하지 않고, 제네릭을 활용 할 수 있다.
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]);
let tuple = func<[number, number, number]>([1, 2, 3]);
