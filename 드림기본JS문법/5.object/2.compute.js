const obj = {
  name: "subin",
  age: 27,
};

//코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 => 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key];
}
//접근하고자하는 키값을 적어서 발류값 얻어올 수 있음
console.log(getValue(obj, "name")); //subin

//속성 추가하는 함수
function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, "job", "engineer");
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, "job");
console.log(obj);
