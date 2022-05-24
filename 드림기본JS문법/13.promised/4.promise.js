function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("second가 0보다 작음"));
      //reject 됐다면 이거 던짐
    }
    setTimeout(resolve, seconds * 1000); //성공했다면 이거 호출
  });
}

runInDelay(2)
  .then(() => console.log("굿bb timer 완료"))
  .catch(console.error)
  .finally(() => console.log("end"));

// runInDelay(2)
// .then(필요한 일을 수행)
// .catch(에러처리)
// .finally(최종적으로 성공실패 상관없이 무조건 출력)
