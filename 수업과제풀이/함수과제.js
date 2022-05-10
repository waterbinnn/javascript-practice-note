// 1. [10, 20, 30, 40] 값의 평균을 구하는 함수를 만들어주세요

let arr = [10, 20, 30, 40];

function avg(x) {
  let sum = 0;
  for (let i of x) {
    sum += i;
  }
  return sum / x.length;
}

console.log(avg(arr));

//2. 숫자단위 콤마를 찍는 함수를 만들어주세요

function comma(num) {
  let len, point, str;

  num = num + "";
  point = num.length % 3;
  len = num.length;

  str = num.substring(0, point);
  while (point < len) {
    if (str != "") str += ",";
    str += num.substring(point, point + 3);
    point += 3;
  }
  return str;
}

console.log(comma(10000000));

//정규표현식을 사용한 풀이
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
