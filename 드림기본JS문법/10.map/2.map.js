const map = new Map([
  ["key1", "π"],
  ["key2", "π"],
]);
console.log(map); //Map(2) { 'key1' => 'π', 'key2' => 'π' }

//μ¬μ΄μ¦νμΈ
console.log(map.size); //2

//μ‘΄μ¬νλμ§ νμΈ
console.log(map.has("key1")); //true
console.log(map.has("key6")); //false

//μν
map.forEach((value, key) => console.log(key, value));
/**
key1 π
key2 π
 */

console.log(map.keys()); //[Map Iterator] { 'key1', 'key2' }
console.log(map.values()); //[Map Iterator] { 'π', 'π' }
console.log(map.entries()); //[Map Entries] { [ 'key1', 'π' ], [ 'key2', 'π' ] }

//μ°ΎκΈ°
console.log(map.get("key1")); //π
console.log(map.get("key2")); //π
console.log(map.get("key4")); //undefined

//μΆκ°
map.set("key3", "π");
console.log(map); //Map(3) { 'key1' => 'π', 'key2' => 'π', 'key3' => 'π' }

//μ­μ 
map.delete("key3");
console.log(map); //Map(2) { 'key1' => 'π', 'key2' => 'π' }

//μ λΆμ­μ 
map.clear();
console.log(map); //Map(0) {}

//μ€λΈμ νΈμμ ν° μ°¨μ΄μ 
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "λ§μλ μ°μ " };
const obj = {
  [key]: milk,
};
console.log(obj);
/**
{
  '[object Object]': { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' }
}
 */

//map
const map2 = new Map([[key, milk]]);
console.log(map2); //{ name: 'milk', price: 10, description: 'λ§μλ μ°μ ' }

console.log(obj[key]); // μ€λΈμ νΈλ μ΄λ κ² ν€λ₯Ό μΆλ ₯ν  μ μμ§λ§
// console.log(map2[key]); mapμ μ΄κ² μλλ€λ μ°¨μ΄κ° μμ

console.log(map2.get(key)); //mapμ΄ ν€λ₯Ό μΆλ ₯νλ λ°©μ { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' }

