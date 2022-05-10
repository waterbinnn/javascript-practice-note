const user = [
  {
    _id: "6271fd40fe5c58d4cbd3a72f",
    index: 0,
    guid: "60f843d2-1b6b-4536-b421-e5df1c4ab735",
    isActive: true,
    balance: "$2,534.11",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "brown",
    name: "Miranda Nguyen",
    gender: "male",
    company: "ZENTIA",
    email: "mirandanguyen@zentia.com",
    phone: "+1 (833) 466-3207",
    address: "198 Dank Court, Hartsville/Hartley, Indiana, 8416",
    about:
      "Consectetur proident anim do commodo ipsum. Elit consectetur irure dolore voluptate. Enim aute voluptate et qui do. Eu pariatur laboris labore esse enim reprehenderit mollit ullamco fugiat. Laborum sunt veniam consectetur laboris cupidatat. Lorem tempor occaecat labore ut et eiusmod amet.\r\n",
    registered: "2021-06-16T11:50:54 -09:00",
  },
  {
    _id: "6271fd40e30856d15651c60c",
    index: 1,
    guid: "ee647592-0647-4ad5-96b1-eb6c06a32dbd",
    isActive: true,
    balance: "$2,636.22",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "Florence Flynn",
    gender: "female",
    company: "ELENTRIX",
    email: "florenceflynn@elentrix.com",
    phone: "+1 (901) 525-3731",
    address: "246 Billings Place, Brandermill, Guam, 5037",
    about:
      "Sint non dolore cupidatat voluptate laboris adipisicing eu quis. Laboris nostrud qui dolor cillum dolor nulla sint culpa est reprehenderit sint ipsum nisi excepteur. Qui cupidatat sint do aliquip ut. Officia est aliquip fugiat ex enim do sunt consequat.\r\n",
    registered: "2014-12-10T08:44:47 -09:00",
  },
  {
    _id: "6271fd404394e16d79143873",
    index: 2,
    guid: "3d3890ff-8241-4a2b-a361-789e0298817a",
    isActive: false,
    balance: "$1,047.32",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Debbie Pratt",
    gender: "female",
    company: "OPTIQUE",
    email: "debbiepratt@optique.com",
    phone: "+1 (831) 537-3188",
    address: "737 Quentin Street, Calpine, Louisiana, 9102",
    about:
      "Officia nisi labore mollit cupidatat exercitation commodo duis adipisicing officia amet laborum. Nulla qui commodo aliqua reprehenderit dolore cupidatat esse ea pariatur sint ad dolore. Exercitation duis veniam velit occaecat est irure quis labore occaecat.\r\n",
    registered: "2016-09-19T10:00:38 -09:00",
  },
];

//user의 id와 name, age를 가진 새로운 array를 만들어주세요

console.log(user.map((i) => [i._id, i.name, i.age]));

/**
 * [
  [ '6271fd40fe5c58d4cbd3a72f', 'Miranda Nguyen', 27 ],
  [ '6271fd40e30856d15651c60c', 'Florence Flynn', 35 ],
  [ '6271fd404394e16d79143873', 'Debbie Pratt', 25 ]
]
 */

//user의 age가 27 이상인 사람의 데이터를 id만 추출해주세요.
let result = [];
for (let i = 0; i < user.length; i++) {
  if (user[i]["age"] >= 27) {
    result.push(user[i]["_id"]);
  }
}
console.log(result); //[ '6271fd40fe5c58d4cbd3a72f', '6271fd40e30856d15651c60c' ]

const answer2 = user.filter((user) => user.age >= 27).map((user) => user._id);
console.log(answer2);

//id가 6271fd40e30856d15651c60c 인 사람의 name만 추출해주세요.

for (let i = 0; i < user.length; i++) {
  if (user[i]["_id"] == "6271fd40e30856d15651c60c") {
    console.log(user[i]["name"]); //Florence Flynn
  }
}

// user의 평균 나이를 구해주세요.
let sum = 0;
for (let i = 0; i < user.length; i++) {
  sum += user[i]["age"];
}
console.log(sum / user.length); //29

//5번 user의 성비를 구해주세요.

// 남자 length / 전체 length : 여자.length / 전체.length
let male = 0;
let female = 0;
for (let i = 0; i < user.length; i++) {
  if (user[i]["gender"] == "male") {
    male++;
  } else {
    female++;
  }
}

console.log(
  `male : female = ${(male / user.length).toFixed(1)} : ${(
    female / user.length
  ).toFixed(1)}`
); //male : female = 0.3 : 0.7

// 5번 다른방법
// console.log(
//   `남 : 여 => ${
//     user.map((i) => i.gender).filter((j) => j == "male").length
//   } : ${user.map((i) => i.gender).filter((j) => j == "female").length}`
// );

// const maleArray = user.filter((user) => user.gender == "male");

// const answer = `${maleArray.length}:${user.length - maleArray.length}`;
// console.log(answer);
