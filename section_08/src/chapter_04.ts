// 템플릿 리터럴 타입

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

// 아래처럼 타입을 정의하면 너무 많은 조합이 생긴다.
// type ColoredAnimal = "red-dog" | "red-cat";
type ColoredAnimal = `${Color}-${Animal}`;

const cloredAnimal: ColoredAnimal = "black-chicken";
