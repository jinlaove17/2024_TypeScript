// 배열(Array)
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "JJ", "Apple"];
let boolArr: Array<boolean> = [true, false, true];

// 배열의 요소의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];
let multiArr2: Array<number | string> = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [[1, 2, 3], [4, 5], [7]];

// 튜플
// - JavaScript에는 존재하지 않는 타입
// - 길이와 타입이 고정된 배열
// - 배열 메서드를 동일하게 사용할 수 있으므로 주의
let tup1: [string, number] = ["hello", 10];
// tup1 = [1, 23]; // error!
tup1 = ["world", 20];

let tup2: [number, string, boolean] = [1, "hello", true];

const users: [string, number][] = [
  ["JJ", 1],
  ["Apple", 2],
  ["Banana", 3],
  ["Cherry", 4],
  // [5, "Orange"], // 튜플을 사용하여 잡아낼 수 있다.
];
