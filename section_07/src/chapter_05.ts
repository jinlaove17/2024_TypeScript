// 프로미스(Promise)
// - 비동기 처리를 위한 객체
// - resolve의 결과 값은 Promise의 타입 변수로 정해줄 수 있지만, reject의 결과 값은 any로만 넘어가기 때문에 타입 좁히기를 통해 처리해주어야 한다.

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("에러 발생!");
  }, 3000);
});

promise
  .then((response) => {
    console.log(10 * response); // 200
  })
  .catch((error) => {
    if (typeof error === "string") {
      console.log(error);
    }
  });

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Hello, TypeScript",
        content: "TypeScript is a superset of JavaScript.",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  console.log(post);
});
