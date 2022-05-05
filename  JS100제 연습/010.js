function stars(n) {
  let str = "\n";

  for (let i = 0; i < n; i++) {
    //공백처리
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }

    // * 만들기 2n+1
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
    // 개행문자추가
    str += "\n";
  }
  return str;
}
console.log(stars(5));
