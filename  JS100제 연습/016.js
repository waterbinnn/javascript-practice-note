//문장이 입력되면 거꾸로 출력

let str = "문장이거꾸로나오나요";

//for of 사용
let s = "";
for (let i of str) {
  s = i + s;
}
console.log(s);

//메서드사용
const reverseString = str.split("").reverse().join("");
console.log(reverseString);
