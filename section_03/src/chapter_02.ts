// unknown 타입
function unknownExam() {
  // 모든 타입이 업 캐스팅 되기 때문에 할당이 가능하다.
  let a: unknown = 30;
  let b: unknown = "Hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown = [1, 2, 3];

  // 반대로 unknown 타입의 값을 다른 타입에 넣는 다운 캐스팅은 불가능하다.
  //   let num: number = a;
  //   let str: string = b;
  //   let bool: boolean = c;
}

// never 타입
// - 공집합
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // never 타입은 최하위 타입이기 때문에 다른 모든 타입에 할당이 가능하다.
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 최하위 타입이기 때문에 다운 캐스팅만 일어나므로 어떤 값도 할당이 불가능
  //   let never1: never = 10;
  //   let never2: never = "Hello";
  //   let never3: never = true;
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");

    // undefined는 void 타입의 하위 타입이므로, undefined를 반환해도 업캐스팅이 되기 때문에 가능하다.
    return undefined;
  }

  // 업 캐스팅
  let voidVar: void = undefined;
}

// any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;

  // any 타입은 unknown 타입의 하위 타입임에도 다운 캐스팅이 일어나는 할당이 가능하다.
  anyVar = unknownVar;

  // any 타입은 undefined 타입의 상위 타입임에도 다운 캐스팅이 일어나는 할당이 가능하다.
  let undefinedVar: undefined;
  undefinedVar = anyVar;

  // never 타입은 공집합이므로 다른 타입을 다운 캐스팅하여 할당하는 것이 불가능하다.
  let neverVar: never;
  //   neverVar = anyVar; // error!
}
