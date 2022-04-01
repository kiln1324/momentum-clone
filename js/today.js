//today.js

const today = document.querySelector("#today");
let nowDate = new Date();
const y = nowDate.getFullYear();
const m = nowDate.getMonth() + 1;
const d = nowDate.getDate();
today.innerText = `${y}년 ${m}월 ${d}일`;
