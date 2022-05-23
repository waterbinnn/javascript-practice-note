const array = [1, 2, 3];
for (const item of array.entries()) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item);
}

// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next().value); //1
// console.log(iterator.next().value); //2
// console.log(iterator.next().value); //3
// console.log(iterator.next().value); //undefined
// console.log(iterator.next().done); //true

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
