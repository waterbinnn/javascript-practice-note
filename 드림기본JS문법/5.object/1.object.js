/**
 * object literal { key:value }
 * mew Object()
 * Object.create();
 * key - 문자, 숫자, 문자열, 심볼
 * value - 원시값, 객체 (함수)
 */

let apple = {
  name: "apple",
  helloBye: "🤟",
  0: 1,
  ["hello-bye1"]: "🤟",
};

apple.name; // 마침표 표기법 dot notation
console.log(apple["hello-bye1"]); //대괄호 표기법 bracket notation
apple["name"];

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);
console.log(apple);

//속성 삭제
delete apple.emoji;
console.log(apple);
