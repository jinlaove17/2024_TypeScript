// 객체 리터럴 타입
// - let user: object와 같이 사용하는 것은 이 변수는 단순히 객체야만 알리는 것이지, 객체의 구조를 알리는 것이 아니다.
// - 타입스크립트는 구조를 기준으로 타입을 정한다. 이를 구조적 타입 시스템(Property Based System)이라 한다.
// - 이와 반대로 이름만을 기준으로 타입을 정의하는 것은 명목적 타입 시스템이라 한다.
// - ?: 선택적 프로퍼티(Optional Property)
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "JJ",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "댕댕이",
  color: "white",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // error!
