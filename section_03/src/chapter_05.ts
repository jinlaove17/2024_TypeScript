// 타입 추론
// - 자동으로 변수의 타입을 추론

// 일반적인 변수를 선언하는 경우, 초기값을 기준으로 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "JJ",
  profile: {
    nickname: "jo",
  },
};

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// return 문에 오는 반환 값을 기준으로 타입을 추론
function func(msg = "hi") {
  return "hello";
}

// 초기값을 지정하지 않으면, 암묵적으로 any 타입으로 설정된다.
let d;
d = 10; // any -> number 진화
d.toFixed();
d = "hello"; // number -> string 진화
d.toUpperCase();

// const는 리터럴 타입으로 설정된다.
const num = 10;
const string = "hello";

let arr = [1, "string"];
