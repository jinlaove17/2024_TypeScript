// 유틸리티 타입 - Exclude<T, U>
// - T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;
// 1단계
// Exclude<string, boolean> | Exclude<boolean, boolean>

// 2단계
// string | never

// 최종
// string

// 유틸리티 타입 - Extract<T, U>
// - T에서 U를 추출하는 타입
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

// 유틸리티 타입 - ReturnType<T>
// - 함수의 반환값 타입을 추출하는 타입
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "Hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
