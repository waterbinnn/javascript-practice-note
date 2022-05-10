//1. '?'나 '||'를 사용하여 함수 다시 작성하기

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

function checkAge2(age) {
  return age > 18 ? true : console.log("보호자의 동의를 받으셨나요?");
}

function checkAge3(age) {
  return age > 18 || console.log("보호자의 동의를 받으셨나요?");
}

// 2. min(a,b) 함수만들기

function min(a, b) {
  return a > b ? b : a;
}
console.log(min(2, 5)); //2
console.log(min(2, -1)); //-1
console.log(min(1, 1)); //1

//3. pow(x,n) 함수 만들기

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(4, 2));

//화살표 함수

let sum = (a, b) => a + b;
console.log(sum(1, 2));

//인수 하나일때
let double = (n) => n + 2;
console.log(double(3));

//인수 생략
let sayHi = () => console.log("hi");
sayHi();

//문제 : 표현식을 사용해 화살표 함수로 바꿔보기
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "동의하십니까?",
//   function() { alert("동의하셨습니다."); },
//   function() { alert("취소 버튼을 누르셨습니다."); }
// );

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);
