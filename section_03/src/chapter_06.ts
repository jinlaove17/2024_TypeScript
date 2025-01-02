// 타입 단언(Type Assertion)
type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;
person.name = "JJ";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// let dog: Dog = {
//   name: "댕댕이",
//   color: "brown",
//   breed: "시고르자브종",
// } as Dog;

let dog = {
  name: "댕댕이",
  color: "brown",
  breed: "시고르자브종",
} as Dog;

// 타입 단언의 규칙
// - 값 as 단언 <- 단언식
// A as B
// - A가 B의 슈퍼타입이거나
// - A가 B의 서브타입이어야 한다.

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;
let num3 = 10 as unknown as string; // 다중 단언 (권장 x)

// const 단언
let num4 = 10 as const;

// as const를 붙인 객체는 프로퍼티가 모두 readonly가 된다.
let cat = {
  name: "냥냥이",
  color: "yellow",
} as const;

// Non-null 단언
// - TypeScript가 해당 값이 null이나 undefined 아님을 확신하게 만듦
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "JJ",
};

const len: number = post.author!.length;
