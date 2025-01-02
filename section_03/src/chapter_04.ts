// 대수 타입
// - 여러 개의 타입을 합성해서 새롭게 만들어낸 타입

// 1. 합집합 타입(Union Type)
// - | 연산자를 사용하여 여러 개의 타입을 합성한 타입

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "댕댕",
  color: "green",
  language: "Korean",
};

// // 밴다이어 그램에서 어느 곳에서도 속할 수 없기 때문에 error!
// let union2: Union1 = {
//   name: "",
// };

// 2. 교집합 타입(Intersection Type)
// - & 연산자를 사용하여 여러 개의 타입을 합성한 타입
// - 주로 객체 타입을 합성할 때 사용

let variable: number & string; // never

type Intersection1 = Dog & Person;

let intersection1: Intersection1 = {
  name: "",
  color: "",
  language: "",
};
