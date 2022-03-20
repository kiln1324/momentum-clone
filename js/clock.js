//clock.js

const today = document.querySelector("#today");
const clock = document.querySelector("#clock");

let nowDate = new Date();
const y = nowDate.getFullYear();
const m = nowDate.getMonth() + 1;
const d = nowDate.getDate();
today.innerText = `${y}년 ${m}월 ${d}일`;

function countTime() {
  nowDate = new Date();
  const nowHour = String(nowDate.getHours()).padStart(2, "0");
  const nowMinutes = String(nowDate.getMinutes()).padStart(2, "0");
  const nowSeconds = String(nowDate.getSeconds()).padStart(2, "0");

  clock.innerText = `${nowHour}시 ${nowMinutes}분 ${nowSeconds}초`;
}

countTime();
setInterval(countTime, 1000);
