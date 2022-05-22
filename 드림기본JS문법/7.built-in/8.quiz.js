// 1. 문자열의 모든 캐릭터를 하니씩 출력
const text = "Hello World!";

for (let i of text) {
  console.log(i);
}

// 2. 사용자들의 id 를 잘라내어 각각의 id를 배열로 보관
const ids = "user1,user2,user3,user4";

const result2 = ids.split(",");

console.log(result2);

// 3. 1초에 한번씩 시계 (날짜포함) 출력

setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString("ko-KR"));
}, 1000);
