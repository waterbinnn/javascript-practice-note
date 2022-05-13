/*
pending 
pulfilled 
rejected
*/

function sayHello() {
  return new Promise((resolve, reject) => {
    // const hello = "Hello Hello";
    resolve("hello");
  });
}
// function sayHello() {
//   return new Promise((resolve, reject) => {
//     reject(new Error());
//   });
// }

sayHello()
  .then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
  })
  .catch((error) => {
    console.log(error);
  });

  