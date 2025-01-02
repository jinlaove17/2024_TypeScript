// 타입 좁히기
// - 조건문 등을 이용해 넓은타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법
// - typeof 연산자는 null에 사용할 경우 object를 반환한다.
// - in 연산자 뒤에는 null이나 undefined를 사용할 수 없다.

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  // 타입 가드(Type Guard)
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getDate());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
