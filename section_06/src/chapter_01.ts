// 타입스크립트의 클래스
// - 하나의 타입으로도 사용할 수 있고, 객체를 생성할 수도 있다.

const employeeA = {
  name: "JJ",
  age: 28,
  position: "developer",

  work() {
    console.log("일 중...");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일 중...");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("JJ", 28, "developer");
console.log(employeeB);

const employeeC: Employee = {
  name: "KJ",
  age: 24,
  position: "designer",

  work() {
    console.log("일 중...");
  },
};
