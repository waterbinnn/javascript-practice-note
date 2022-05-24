//바나나와 사과를 같이 가져오기
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

getBanana() //
  .then((banana) =>
    //바나나를 가지고 오면
    getApple() //사과도 가져와
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("all", fruits));

//Promise.race 주어진 Promise 중에 가장 빨리 수행된것이 이김
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log("race", fruit));

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);

//allSettled : 모든 결과에 대해 받아보고 싶어!
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("all-settle", fruits))
  .catch(console.log);
