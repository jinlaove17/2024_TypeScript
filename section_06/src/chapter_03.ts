// 인터페이스와 클래스
// - 인터페이스를 상속할 경우 public 필드만 정의할 수 있다.

interface CharacterInterface {
  name: string;
  moveSpeed: number;

  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move() {
    console.log(`이름: ${this.name}, 이동속도: ${this.moveSpeed}`);
  }
}
