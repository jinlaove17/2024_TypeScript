// infer
// - inference: 추론

type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>; // never

// 예시
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 Promise 타입이어야 한다.
// 2. Promise 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
