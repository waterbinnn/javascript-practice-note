let a = 0;
console.log(a);
a++; //할당을 해주고 그 뒤에 값을 증가시킴
console.log(a);
a--;
console.log(a);

//주의!!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함

a = 0;
console.log(a++); //0 먼저 0을 할당하고
console.log(a); //1 1증가

let b = a++;
console.log(b); //0
console.log(a); //1
