// 함수 타입 표현식(Function Type Expressions)

type Operation = (a: number, b: number) => number;

// const add = (a: number, b: number): number => a + b;
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

// 호출 시그니처(Call Signature)

type Operation2 = {
  (a: number, b: number): number;
  // 별도의 프로퍼티도 가질 수 있다.(하이브리드 타입)
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name = "JJ";
