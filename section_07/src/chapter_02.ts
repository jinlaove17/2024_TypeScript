// map 메서드
const arr = [1, 2, 3];
const newArr = arr.map((item) => 2 * item); // [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (item) => 2 * item);
map(["hi", "hello"], (item) => item.length);

// forEach 메서드
const arr2 = [1, 2, 3];
arr2.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i]);
  }
}
forEach(arr2, (item) => console.log(item.toFixed()));
forEach(["12", "34"], (item) => console.log(item.length));
