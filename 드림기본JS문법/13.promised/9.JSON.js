const susu = {
  name: "su",
  age: 20,
  eat: () => {
    console.log("eat");
  },
};

//직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(susu);
console.log(susu); //{ name: 'su', age: 20, eat: [Function: eat] }
console.log(json); //{"name":"su","age":20}

//역직렬화 Deserializing : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
