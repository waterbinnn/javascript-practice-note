//래퍼 객페 (wrapper object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환

const number = 123; //원시타입
console.log(number.toString()); //number 원시타입을 감싸고있는 Number 객체로 감싸짐

console.log(number); //number 원시타입

// 평소에는 원시타입으로 있다가 . 을 찍어서 그 데이터 타입에 해당하는 객체로 바쒼다.

const text = "text";
console.log(text);
text.length; // string 객체
text.trim();
