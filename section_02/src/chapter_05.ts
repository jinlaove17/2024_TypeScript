// enum 타입
// - 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// - 컴파일 시 js 객체로 변환된다.

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
  JAPANESE = "ja",
}

const user1 = {
  name: "JJW",
  role: Role.ADMIN, // 0: 관리자
  languate: Language.KOREAN,
};

const user2 = {
  name: "WJW",
  role: Role.USER, // 1: 일반 유저
  languate: Language.ENGLISH,
};

const user3 = {
  name: "KSJ",
  role: Role.GUEST, // 2: 게스트
  languate: Language.JAPANESE,
};

console.log(user1, user2, user3);
