//공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요

function pow(a, b) {
  return a ** b;
}
console.log(pow(2, 4));

// 정답코드
// const n = prompt('수를 입력하세요.').split(' ');

//콘솔에서 찍기 위해 수는 따로 주겠습니다
const n = [2, 4];
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

