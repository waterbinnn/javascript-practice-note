//3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

function clap(n) {
  if (n % 3 === 0) {
    console.log("짝");
  } else {
    console.log(n);
  }
}

clap(33);
clap(32);
clap(6);
