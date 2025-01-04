// 인터페이스
// - 타입에 이름을 지어주는 또 다른 문법
// - 상호 간에 약속된 규칙
// - 객체의 구조를 정의하는데 특화된 문법
// - 상속, 합침 등의 특수한 기능을 제공함
// - 타입 별칭과 유사하지만, 확장 가능한 문법

interface Person {
  readonly name: string;
  age?: number;
  //   sayHi: () => void; // 함수 표현식 방식
  sayHi(): void; // 오버로드는 호출 시그니처 방식만 가능
  sayHi(a: number, b: number): void;
}

type Type1 = number | string | Person;
type Type2 = Person & Person;

const person: Person | number = {
  name: "JJ",
  age: 28,
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
