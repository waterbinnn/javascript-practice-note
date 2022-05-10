//공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. (단, 소숫점 자리는 모두 버립니다.)

//함수활용풀이
function scores(a, b, c) {
  return (parseInt(a + b + c) / 3).toFixed(0);
}
console.log(scores(30, 50, 77));

//for문 활용 풀이
let score = [30, 50, 77];
let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += parseInt(score[i], 10);
}

console.log(Math.floor(sum / 3));
