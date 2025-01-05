// 제네릭 인터페이스
interface KeyPair<T, U> {
  key: T;
  value: U;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 123,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["hello"],
};

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: 1234,
  hi: 2383,
};

interface GenericMap<T> {
  [key: string]: T;
}

let genericMap1: GenericMap<number> = {
  key: 1234,
};

let genericMap2: GenericMap<boolean> = {
  key: false,
  extra: true,
};

// 제네릭 타입 별칭
type GenericMap2<T> = {
  [key: string]: T;
};

let genericMap3: GenericMap2<string> = {
  key: "hello",
};

// 제네릭 인터페이스의 활용 예시
// - 유저 관리 프로그램
// - 유저 구분: 학생 유저, 개발자 유저
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 타입 좁히기를 통한 방법?
  //   if (user.profile.type !== "student") {
  //     console.log("잘못 오셨습니다.");
  //     return;
  //   }

  // 제네릭을 쓰면 간단하게 처리할 수 있다.
  const school = user.profile.school;
  console.log(`${school}에 오신 것을 환영합니다.`);
}

const developerUser: User<Developer> = {
  name: "JJ",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "포항공대",
  },
};

// goToSchool(developerUser);
goToSchool(studentUser);
