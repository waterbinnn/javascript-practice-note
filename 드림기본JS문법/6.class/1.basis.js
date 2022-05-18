
// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 class✨

class Fruit {
  //생성자 함수 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

// apple은 Fruit라는 클래스의 인스턴스이다. - 용어 기억!
const apple = new Fruit("apple", "🍎");
// orange는 Fruit라는 클래스의 인스턴스이다. - 용어 기억!
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
console.log(apple.name);

//+) obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다. 객체는 그냥 만들어진 객체임. (클래스를 통해 만들어지지 않았으니깐 그 어떤 클래스의 인스턴스도 아닌 것.)
const obj = {name:'noze'}

