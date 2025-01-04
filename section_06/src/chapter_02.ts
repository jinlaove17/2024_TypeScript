// 접근 제어자(Access Modifiers)
// - public, private, protected
// - public: 클래스 내부, 클래스 외부 모두 접근 가능
// - private: 클래스 내부에서만 접근 가능
// - protected: 클래스 내부, 서브 클래스에서만 접근 가능
// - 기본값은 public

class Employee {
  //   // 필드
  //   private name: string;
  //   protected age: number;
  //   position: string;

  //   // 생성자
  //   constructor(name: string, age: number, position: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.position = position;
  //   }

  // 매개변수에 접근지정자와 타입을 동시에 지정해 줄 수 있으며,
  // 자동으로 매개변수의 값으로 필드를 초기화 시켜준다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

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

  // 메서드
  testFunc() {
    // console.log(this.name); // private 필드에 접근 불가
    console.log(this.age); // protected 필드에 접근 가능
  }
}

const employeeA = new Employee("JJ", 28, "developer");
// employeeA.name = "JK"; // private 필드에 접근 불가
// --employeeA.age; // protected 필드에 접근 불가
employeeA.position = "designer"; // public 필드에 접근 가능
console.log(employeeA);
