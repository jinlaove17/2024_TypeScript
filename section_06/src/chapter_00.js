// 자바스크립트의 클래스

let studentA = {
  name: "JJ",
  age: 20,
  grade: "A+",

  study() {
    console.log("열심히 공부하기");
  },
  introduce() {
    console.log(`안녕하세요! ${this.grade} 학년 ${this.name} 입니다.`);
  },
};

// 동일한 프로퍼티를 가진 객체를 생성하게 된다면, 중복된 코드가 너무 많다.
let studentB = {
  name: "길동",
  age: 21,
  grade: "B-",
  study() {
    console.log("열심히 공부하기");
  },
  introduce() {
    console.log(`안녕하세요! ${this.grade} 학년 ${this.name} 입니다.`);
  },
};

class Student {
  // 필드
  name;
  age;
  grade;

  // 생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드
  study() {
    console.log("열심히 공부하기");
  }

  introduce() {
    console.log(`안녕하세요! ${this.grade} 학년 ${this.name} 입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스(Instance)
// studentC는 Student의 인스턴스이다.
let studentC = new Student("JJ", 20, "A+");
studentC.study();
studentC.introduce();

// 클래스 상속
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  study() {
    console.log("열심히 공부하기2");
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}(을)를 사용해서 프로그래밍하기`);
  }
}

let studentDeveloper = new StudentDeveloper("KKL", 23, "A0", "C++");
studentDeveloper.programming();
studentDeveloper.study();
