// 기본 타입 간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입 간의 호환성
// - 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮을지
// - 객체의 프로퍼티에따라 상속 관계가 형성된다.

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "댕댕이",
  color: "brown",
  breed: "Maltese",
};

animal = dog;
// dog = animal; // error!

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

book = programmingBook;
// programmingBook = book; // error!

// 초과 프로퍼티 검사
// - 객체 타입을 초기화 할 때, 실제 타입에 정의하지 않은 프로퍼티가 존재하면 에러가 발생한다.

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "react.js", // error!
};

// 이때는 초과 프로터티 검사가 이루어지지 않음
let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "react.js", // error!
});
func(programmingBook);
