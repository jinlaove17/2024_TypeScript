// 제네릭 클래스
// - 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와는 다르게 생성자의 매개변수로 타입을 자동으로 추론한다.

class List<T> {
  // 생성자
  constructor(private list: T[]) {}

  // 메서드
  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.print();
numberList.push(4);
numberList.print();

const stringList = new List(["hi", "hello", "bye"]);
stringList.pop();
stringList.print();
stringList.push("goodbye");
stringList.print();
