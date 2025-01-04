// 함수 오버로딩
// - 동일한 이름의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의할 수 있는 것

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number): void {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(20 * a);
  }
}

func(1);
func(1, 2, 3);
