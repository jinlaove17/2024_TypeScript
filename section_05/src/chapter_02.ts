// 선언 합침

// type Person = {
//   name: string;
// };

// type Person = {
//   age: number;
// };

// 인터페이스는 타입 별칭과 달리 동일한 이름으로 정의하면 모든 선언이 합쳐지므로 에러가 발생하지 않는다.
interface Person {
  name: string;
}

interface Person {
  // 동일한 이름의 프로퍼티를 다른 타입으로 정의 할 경우 충돌 발생
  // - 이때는 확장과도 달리 서브 타입도 불가능하다.
  //   name: number;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "JJ",
  age: 28,
};

// 인터페이스 합치기는 보통 모듈 보강을 할 때 사용한다.
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  externalData: string;
}

const lib = {
  a: 1,
  b: 2,
  externalData: "보강된 데이터",
};
