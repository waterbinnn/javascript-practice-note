console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.NaN); //NaN
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity

const num1 = 123;
if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

//지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)

const num2 = 102;
console.log(num2.toExponential()); //1.02e+2

//반올림하여 문자열로 변환
const num3 = 1234.12;
console.log(num3.toFixed()); //1234

console.log(num3.toString()); //숫자를 문자열로
console.log(num3.toLocaleString("ar-EG")); //특정 나라에 맞게 , 여기선 아라바카언어로 문자열 변환

//원하는 자릿수까지 유효하도록 반올림

console.log(num3.toPrecision(5)); //1234.1
console.log(num3.toPrecision(4)); //1234
console.log(num3.toPrecision(2)); //1.2e+3

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  //0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
  console.log(Number.EPSILON); //2.220446049250313e-16
}

const num = 0.1 + 0.2 - 0.2;
console.log(num); //0.10000000000000003

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1)); //true
console.log(isEqual(0.1, 0.1)); //true
console.log(isEqual(num, 0.1)); //true

const x = 0.2,
  y = 0.3,
  z = 0.1;
let equal = Math.abs(x - y + z) < Number.EPSILON;
console.log(equal);
