// 타입 별칭
// - 동일 스코프 내에서는 별칭이 중복될 수 없다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function functionScope() {
  type User = {
    id: number;
  };

  let user: User = {
    id: 30,
    // name: "20", // error!
  };
}

let user: User = {
  id: 1,
  name: "JJW",
  nickname: "JJ",
  birth: "1998.09.23",
  bio: "안녕하세욤",
  location: "서울",
};

let user2: User = {
  id: 1,
  name: "JJW",
  nickname: "JJ",
  birth: "1998.09.23",
  bio: "안녕하세욤",
  location: "서울",
};

// 인덱스 시그니처
// key와 value의 타입을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  // 확장될 수록 다 정의해야해..?

  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "kr",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Essential: number; // 필수 프로퍼티(인덱스 시그니처의 value 타입과 동일해야 한다. Essential: string; -> error!)
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
  Essential: 10000,
};
