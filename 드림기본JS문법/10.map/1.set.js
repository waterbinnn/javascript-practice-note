//Set

const set = new Set([1, 2, 3]);
console.log(set); //Set(3) { 1, 2, 3 }

console.log(set.has(2)); //true
console.log(set.has(6)); //false

//set 은 순회가 가능하다
set.forEach((item) => console.log(item)); //1 2 3
for (const value of set.values()) {
  console.log(value); //1 2 3
}

//추가
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 }
//중복이 되지 않는다.
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 }

//삭제
set.delete(6);
console.log(set); //Set(3) { 1, 2, 3 }

//전부 삭제
set.clear();
console.log(set); //Set(0) {}

// shallow copy 가 되는 set
const obj1 = { name: "🍎", price: 8 };
const obj2 = { name: "🍌", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); //Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

//퀴즈 : obj1의 값을 변경하면 어떻게 나올지?
obj1.price = 10;
objs.add(obj1); // 오브젝트를 변경한 다음에 오브젝트를 add
console.log(objs); //Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } } -> 똑같이 Set(2)가 나옴 ; shallow copy

//퀴즈
const obj3 = { name: "🍌", price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
/**
 * Set(3) {
  { name: '🍎', price: 10 }, 0X11 주소
  { name: '🍌', price: 5 }, 0X12 주소
  { name: '🍌', price: 5 } 0X13 주소
}
 */
/**
 * Set(3) {
  { name: '🍎', price: 10 },
  { name: '🍌', price: 5 },
  { name: '🍌', price: 8 }
}

 */
