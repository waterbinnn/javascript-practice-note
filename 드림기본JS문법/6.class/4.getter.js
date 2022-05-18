//접근자 프로퍼티

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("류진", "신");
console.log(student.firstName);
// console.log(student.fullName()); // 이렇게 함수로 접근하는게 아니라 속성처럼 접근하고 싶을때
console.log(student.fullName);
student.fullName = "김민니";

console.log(student.fullName);
