//서로 연관있는 속성과 행동을 묶어둔것 : 객체
//객체 안의 함수

const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();
