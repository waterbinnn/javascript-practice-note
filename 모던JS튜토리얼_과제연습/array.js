//1. border-left-width를 borderLeftWidth로 변경하기

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("border-left-width")); //borderLeftWidth

/**
 2. 특정 범위에 속하는 요소 찾기 
 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성
 */

let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let filtered = filterRange(arr, 1, 5);
console.log(filtered); //[ 5, 3, 1 ]
console.log(arr); //[ 5, 3, 8, 1 ] 기존 배열은 그대로 있음

/**
 3. 오름차순 내림차순 정렬하기 
 */
let arr2 = [5, 2, 1, -10, 8];

console.log(arr2.sort((a, b) => a - b)); //[ -10, 1, 2, 5, 8 ]
console.log(arr2.sort((a, b) => b - a)); //[ 8, 5, 2, 1, -10 ]

/*4. 이름매핑하기 
name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.*/

let su = { name: "su", age: 25 };
let bin = { name: "bin", age: 30 };
let mar = { name: "Mar", age: 28 };

let users1 = [su, bin, mar];
let names1 = users1.map((item) => item.name);
console.log(names1); //[ 'su', 'bin', 'Mar' ]

/*4. 객체매핑하기 
name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.*/
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith

// 5. 평균나이구하기
let jo = { name: "Jo", age: 25 };
let pe = { name: "Pe", age: 30 };
let ma = { name: "Ma", age: 29 };

let arr3 = [jo, pe, ma];

function getAvaerageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
console.log(getAvaerageAge(arr3)); //28
