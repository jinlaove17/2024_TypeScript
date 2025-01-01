// number
// : 주석(annotation)
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let und1: undefined = undefined;

// strictNullChecks: false일 때만 가능한 코드
// let numA: number = null;

// 리터럴
// 값 그 자체가 타입이 되는 타입
let numA: 10 = 10;
// numA = 12; // error!

let strA: "hello" = "hello";
let boolA: true = true;
