let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
}
console.log(a + b); //14+2 = 16

// i 한번 반복할때마다 +2
// i = 1 10 +1 = 11
// i = 3 11 +3 = 14
