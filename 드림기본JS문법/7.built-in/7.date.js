// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); //2022-05-22T08:26:13.017Z
console.log(new Date("Jun 5, 2022")); //2022-06-04T15:00:00.000Z
console.log(new Date("2022-12-17T03:24:00")); //2022-12-16T18:24:00.000Z

//밀리초 단위로 출력된다. 
console.log(Date.now()); //1653207973024
console.log(Date.parse("2022-12-17T03:24:00")); //1671215040000

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); //  내가 원하는 시간대로 지정이 가능. 0이 1월
console.log(now.getFullYear()); //2023
console.log(now.getDate()); //22  0: 1
console.log(now.getDay()); // 0은 일요일일부터, 1... 6은 토요일
console.log(now.getTime()); //1674375973025 
console.log(now); //2023-01-22T08:26:13.025Z

console.log(now.toString()); //Sun Jan 22 2023 17:26:13 GMT+0900 (Korean Standard Time) 
console.log(now.toDateString()); //Sun Jan 22 2023 날짜만 표기
console.log(now.toTimeString()); //17:26:13 GMT+0900 (Korean Standard Time) 
console.log(now.toISOString()); // ISO 8601 형식: 2023-01-22T08:26:13.025Z 
console.log(now.toLocaleString("en-US")); //1/22/2023, 5:26:13 PM 
console.log(now.toLocaleString("ko-KR")); //2023. 1. 22. 오후 5:26:13

