// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

// extends 양옆으로 대괄호를 씌워주면 분산을 방지할 수 있다.
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 타입 변수를 유니온 타입으로 넣어줄 경우
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string>과 동일
// string | number

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>과 동일
// number | string | number

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// never가 포함되면 사라진다. 특정 집합과 공집합의 union은 특정 집합 그 자체가 되므로

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// never | string | never => string
