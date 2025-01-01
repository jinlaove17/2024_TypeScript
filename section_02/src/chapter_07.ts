// void
// - 공허 -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// return문을 명시하지 않아도 된다.
function func2(): void {
  console.log("hello");
}

// TypeScript 5.1이후 undefined도 return문을 생략할 수 있다.
function func3(): undefined {}

// void 타입으로 정의된 타입은 undefined만 할당 가능
// strickNullChecks 옵션을 끄면 null도 할당 가능
let a: void;

// never
// 존재하지 않는 -> 불가능한 타입
// 절대로 정상적으로 종료될 수 없어, 반환값이 존재할 수 없는경우 사용
function func4(): never {
  //   while (true) {}
  throw new Error();
}

// 절대 아무 변수도 never 타입에 할당할 수 없다.
let b: never;
// b = 1;
// b = {};
// b = "";
// b = undefined;
// b = null;
