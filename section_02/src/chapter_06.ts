// any
// - 개발자가 특정 변수의 타입을 확실히 알 수 없을 때 사용
// - 타입 검사를 다 통과하지만, 런타임에 에러가 발생하기 때문에 가능한 한 사용하지 않는 것을 권장

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = () => {};
anyVar.toUpperCase();
anyVar.toFixed();

// 다른 변수에 any 타입을 할당할 수 있음
let num: number = 10;
num = anyVar;

// unknown
// - 변수의 타입을 확신할 수 없다면 any 대신 unknown을 사용하는 것이 낫다.
let unknownVar: unknown;
unknownVar = "hi";
unknownVar = 10;
unknownVar = true;
unknownVar = () => {};

// 함수 호출 불가
// unknownVar.toUpperCase();
// unknownVar.toFixed();

// 다른 변수에 unknown 타입을 할당할 수 없음
// num = unknownVar;

// 타입 정제시 함수 호출 가능
if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}
