console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)"); //2

console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat("12.43"));
console.log(parseInt("12.43"));
console.log(parseInt("11"));

// URL (URI , Uniform Resource Identifier 하위개념)

const URL = "https://수빈수.com";
const encoded = encodeURI(URL);
console.log(encoded); // https://%EC%88%98%EB%B9%88%EC%88%98.com

const decoded = decodeURI(encoded);
console.log(decoded); //https://수빈수.com

// 전체 URL 이 아닌 부분적인 것은 component 사용
const part = "수빈수.com";
console.log(encodeURIComponent(part)); //%EC%88%98%EB%B9%88%EC%88%98.com
