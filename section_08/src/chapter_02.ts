// keyof 연산자

interface Person {
  name: string;
  age: number;
}

// typeof 연산자는 타입을 정의할 때 사용하면, 타입스크립트가 현재 추론하는 타입을 가져온다.
// type Person = typeof person;

// keyof 연산자를 쓰면 해당 객체의 프로퍼티를 유니온 타입("name" | "age")으로 추출한다.
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "JJ",
  age: 28,
};

getPropertyKey(person, "name"); // JJ
