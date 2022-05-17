//원시타입은 값이 복사되어 전달됨

let a = 1;
let b = a;

b = 2;
console.log(a); //1
console.log(b); //2

//객체타입은 참조값(메모리주소, 레퍼런스) 가 복사되어 전달됨
let apple = {
  //0x1234
  name: "사과",
};

let orange = apple; //0x1234 주소가 복사됨
orange.name = "오렌지";
console.log(apple); //orange
console.log(orange); //orange
