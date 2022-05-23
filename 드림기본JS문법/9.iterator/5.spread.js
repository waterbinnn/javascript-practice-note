// Spread 연산자, 전개구문
/**
 * 모든 Interable은 Spread 될 수 있다
 * 순회가 가능한 모든 것들은 촤르르륵 펼칠 수 있다
 * func(...iterable)
 * [...iterable]
 * {...obj}
 * EcmaScript(2016+)
 */

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

//Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

//Array Concat
const love1 = ["💛", "💖"];
const love2 = ["😇", "😭"];
let arr = love1.concat(love2);
console.log(arr); //[ '💛', '💖', '😇', '😭' ]

//전개구문을 활용해 array를 합쳐줄수도 있다
arr = [...love1, "😇", ...love2];
console.log(arr); //
["💛", "💖", "😇", "😇", "😭"];

//Object
const susu = { name: "Subin", age: 20 };
const updated = {
  ...susu,
  job: "백수",
};
console.log(susu); //{ name: 'Subin', age: 20 }
console.log(updated); //{ name: 'Subin', age: 20, job: '백수' }
