// 맵드 타입
// - interface로는 맵드 타입을 만들 수 없고, 타입 별칭을 사용해야 한다.

interface User {
  id: number;
  name: string;
  age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "JJ",
    age: 28,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartitialUser) {
  // ... 수정
}

// age 프로퍼티의 값만 수정을 하고 싶은데, 선택적으로 프로퍼티를 보낼 수가 없는 상황...
// => PartitialUser 타입을 사용하여 age 프로퍼티를 선택적으로 만들어준다?

// type PartitialUser = {
//   id: number;
//   name?: string;
//   age?: number;
// };
// 코드의 중복이 너무 많아진다.

type PartitialUser = {
  readonly [key in keyof User]?: User[key];
};

updateUser({
  id: 1,
  age: 27,
});
