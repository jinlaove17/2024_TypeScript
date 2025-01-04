// 인터페이스 확장
// - 상속 개념

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 원본 타입의 서브 타입으로 오버라이딩 가능
  name: "hello";
  isBark: boolean;
}

// 인터페이스는 타입 별칭도 확장이 가능하다.
type Animal2 = {
  name: string;
  color: string;
};

interface Dog2 extends Animal2 {
  isBark: boolean;
}

interface Cat {
  isScratch: boolean;
}

interface Chicken {
  isFly: boolean;
}

const dog: Dog = {
  name: "hello",
  color: "black",
  isBark: true,
};

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "hello",
  color: "black",
  isBark: true,
  isScratch: false,
};
