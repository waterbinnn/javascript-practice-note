// 얕은 복사 shallow copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐
// Array.form , ocncat, slice, spread(...), object.assign

const pizza = { name: "pizza", price: 2 };
const ramen = { name: "ramen", price: 3 };
const sushi = { name: "sushi", price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log("store1", store1);
//store1 [ { name: 'pizza', price: 2 }, { name: 'ramen', price: 3 } ]
console.log("store2", store2);
//store1 [ { name: 'pizza', price: 2 }, { name: 'ramen', price: 3 } ]

store2.push(sushi);
console.log("store1", store1);
console.log("store2", store2);

pizza.price = 4;
console.log("store1", store1);
console.log("store2", store2);
