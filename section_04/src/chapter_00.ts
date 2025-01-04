// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// - 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// - 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과 값을 반환하는지 이야기
// - 반환 값의 타입은 return에 오는 값을 추론하므로 생략 가능
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// - 디폴트 매개변수를 사용할 경우, 타입 생략 가능
// - ?를 사용하여 선택적 매개변수로 사용 가능
// - 선택적 매개변수는 가장 우측에 위치해야 함
function introduce(name = "JJ", age: number, tall?: number) {
  console.log(`안녕하세요! 제 이름은 ${name}입니다.`);

  // 타입 가드 => 타입 좁히기
  if (typeof tall === "number") {
    console.log(`제 키는 ${tall + 10}cm 입니다.`);
  }
}

// 디폴트 매개변수와 다른 타입의 인자 전달 불가
// introduce(1, 27, 180); // error!
introduce("JJ", 27);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((num) => (sum += num));
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

// 매개변수의 개수를 정하고 싶다면?
// - 튜플을 활용
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((num) => (sum += num));
  return sum;
}

getSum2(1, 2, 3);
getSum2(1, 2, 3, 4, 5);
