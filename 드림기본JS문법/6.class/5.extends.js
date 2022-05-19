class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");

console.log(tiger); //Tiger { color: '노랑이' }
tiger.eat(); //먹자
tiger.sleep(); //잔다

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자");
  }

  eat() {
    super.eat(); //부모의 eat 호풀하고 나서 추가적으로 하고싶을 것 만들어줌
    //오버라이딩 overriding - 부모함수 삼켜버림
    console.log("강아지가 먹느다!");
  }
}
const dog = new Dog("실버", "수수");
console.log(dog); // Dog { color: '실버', ownerName: '수수' }
dog.eat(); //먹자 강아지가 먹는다!


