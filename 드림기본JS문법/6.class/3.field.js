class Fruit {
  name;
  emoji;
  type = "과일"; //초기화
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
apple.#name = "orange";
console.log(apple);
