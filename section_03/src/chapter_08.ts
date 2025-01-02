// 서로소 유니온 타입
// - 교집합이 없는 타입들로만 만든 유니온 타입
// - tag는 리터럴 타입이므로 서로소 유니온 타입이 된다.
//   즉, 위 프로퍼티를 통해 교집합이 없도록 만들 수 있다.

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  // 타입 가드를 통한 타입 좁히기
  switch (user.tag) {
    case "ADMIN":
      console.log(`{user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}점을 가지고 있습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님은 ${user.visitCount}번 방문했습니다.`);
      break;
  }
}

// 복습겸 한가지 사례 더 살펴보기
// - 비동기 작업의 결과를 처리하는 객체를 만들 때

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };
// 위 코드처럼 옵셔널 프로퍼티를 사용하면, processResult에서는 더이상 타입 좁히기가 불가능하여 해당 프로퍼티가 있는지 보증할 수 없기 때문에 task.error?.message와 같이 옵셔널 체이닝 연산자를 사용해야만 한다.
// 이를 개선하기 위해, 아래와 같은 코드로 바꿔본다.
// 이제는 각 type에 해당 프로퍼티가 반드시 존재함을 보증하므로, state 프로퍼티로 타입 좁히기가 일어나면 해당 프로퍼티를 사용할 때 옵셔널 체이닝 연산자를 사용할 필요가 없다.

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩 중");
      break;
    case "FAILED":
      //   console.log(task.error?.message);
      console.log(task.error.message);
      break;
    case "SUCCESS":
      //   console.log(task.response?.data);
      console.log(task.response.data);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 . . .",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};
