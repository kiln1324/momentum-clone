//flip

const app = document.getElementById("app");

const clock = {
  h: app.querySelector(".clock_h"),
  m: app.querySelector(".clock_m"),
  s: app.querySelector(".clock_s"),
};

clock.h.digit = clock.h.querySelector(".digit");
clock.h.digit_Left = clock.h.querySelector(".digit_left");
clock.h.digit_Right = clock.h.querySelector(".digit_right");

clock.h.digit_Left.cardWrap = clock.h.digit_Left.querySelector(".card-wrap");
clock.h.digit_Left.front = clock.h.digit_Left.querySelector(".card_front");
clock.h.digit_Left.back = clock.h.digit_Left.querySelector(".card_back");

clock.h.digit_Right.cardWrap = clock.h.digit_Right.querySelector(".card-wrap");
clock.h.digit_Right.front = clock.h.digit_Right.querySelector(".card_front");
clock.h.digit_Right.back = clock.h.digit_Right.querySelector(".card_back");

clock.m.digit = clock.m.querySelector(".digit");
clock.m.digit_Left = clock.m.querySelector(".digit_left");
clock.m.digit_Right = clock.m.querySelector(".digit_right");

clock.m.digit_Left.cardWrap = clock.m.digit_Left.querySelector(".card-wrap");
clock.m.digit_Left.front = clock.m.digit_Left.querySelector(".card_front");
clock.m.digit_Left.back = clock.m.digit_Left.querySelector(".card_back");

clock.m.digit_Right.cardWrap = clock.m.digit_Right.querySelector(".card-wrap");
clock.m.digit_Right.front = clock.m.digit_Right.querySelector(".card_front");
clock.m.digit_Right.back = clock.m.digit_Right.querySelector(".card_back");

clock.s.digit = clock.s.querySelector(".digit");
clock.s.digit_Left = clock.s.querySelector(".digit_left");
clock.s.digit_Right = clock.s.querySelector(".digit_right");

clock.s.digit_Left.cardWrap = clock.s.digit_Left.querySelector(".card-wrap");
clock.s.digit_Left.front = clock.s.digit_Left.querySelector(".card_front");
clock.s.digit_Left.back = clock.s.digit_Left.querySelector(".card_back");

clock.s.digit_Right.cardWrap = clock.s.digit_Right.querySelector(".card-wrap");
clock.s.digit_Right.front = clock.s.digit_Right.querySelector(".card_front");
clock.s.digit_Right.back = clock.s.digit_Right.querySelector(".card_back");

//console.log(clock.s.digit_Right);

let date = new Date();
let now = {
  h: String(date.getHours()).padStart(2, "0"),
  m: String(date.getMinutes()).padStart(2, "0"),
  s: String(date.getSeconds()).padStart(2, "0"),
};
let beforeTime = {
  h: String(date.getHours()).padStart(2, "0"),
  m: String(date.getMinutes()).padStart(2, "0"),
  s: String(date.getSeconds()).padStart(2, "0"),
};

function changeTime() {
  let nexts1 = parseInt(now.s[1]) + 1 == 10 ? "0" : parseInt(now.s[1]) + 1;

  clock.s.digit_Right.setAttribute("data-digit-front", now.s[1]);
  clock.s.digit_Right.front.innerHTML = now.s[1];
  clock.s.digit_Right.setAttribute("data-digit-back", nexts1);
  clock.s.digit_Right.back.innerHTML = nexts1;

  if (beforeTime.s[1] != now.s[1]) {
    clock.s.digit_Right.cardWrap.animate(
      {
        transform: ["rotateX(0)", "rotateX(180deg)"],
      },
      1000
    );
  }
  let nexts0 = parseInt(now.s[0]) + 1 == 6 ? "0" : parseInt(now.s[0]) + 1;

  clock.s.digit_Left.setAttribute("data-digit-front", now.s[0]);
  clock.s.digit_Left.front.innerHTML = now.s[0];

  if (now.s[1] == "9") {
    clock.s.digit_Left.cardWrap.animate(
      {
        transform: ["rotateX(0)", "rotateX(180deg)"],
      },
      1000
    );
  }
  setTimeout(function () {
    clock.s.digit_Left.setAttribute("data-digit-back", nexts0);
    clock.s.digit_Left.back.innerHTML = nexts0;
  }, 200);

  /* --------------------------m---------------------------------------- */
  let nextm1 = parseInt(now.m[1]) + 1 == 10 ? "0" : parseInt(now.m[1]) + 1;

  clock.m.digit_Right.setAttribute("data-digit-front", now.m[1]);
  clock.m.digit_Right.front.innerHTML = now.m[1];

  if (now.s == 59) {
    clock.m.digit_Right.cardWrap.animate(
      {
        transform: ["rotateX(0)", "rotateX(180deg)"],
      },
      1000
    );
  }
  setTimeout(function () {
    clock.m.digit_Right.setAttribute("data-digit-back", nextm1);
    clock.m.digit_Right.back.innerHTML = nextm1;
  }, 200);

  let nextm0 = parseInt(now.m[0]) + 1 == 6 ? "0" : parseInt(now.m[0]) + 1;

  clock.m.digit_Left.setAttribute("data-digit-front", now.m[0]);
  clock.m.digit_Left.front.innerHTML = now.m[0];

  if (now.m[0] != beforeTime.m[0]) {
    clock.m.digit_Left.cardWrap.animate(
      {
        transform: ["rotateX(0)", "rotateX(180deg)"],
      },
      1000
    );
  }
  setTimeout(function () {
    clock.m.digit_Left.setAttribute("data-digit-back", nextm0);
    clock.m.digit_Left.back.innerHTML = nextm0;
  }, 200);

  /* ------------------------h-------------------------------- */

  let nexth1 = parseInt(now.h[1]) + 1 == 4 ? "0" : parseInt(now.h[1]) + 1;

  clock.h.digit_Right.setAttribute("data-digit-front", now.h[1]);
  clock.h.digit_Right.front.innerHTML = now.h[1];

  if (now.h[0] != beforeTime.h[0]) {
    clock.h.digit_Right.cardWrap.animate(
      {
        transform: ["rotateX(0)", "rotateX(180deg)"],
      },
      1000
    );
  }
  setTimeout(function () {
    clock.h.digit_Right.setAttribute("data-digit-back", nexth1);
    clock.h.digit_Right.back.innerHTML = nexth1;
  }, 200);

  let nexth0 = parseInt(now.h[0]) + 1 == 3 ? "0" : parseInt(now.h[0]) + 1;

  clock.h.digit_Left.setAttribute("data-digit-front", now.h[0]);
  clock.h.digit_Left.front.innerHTML = now.h[0];
  clock.h.digit_Left.setAttribute("data-digit-back", nexth0);
  clock.h.digit_Left.back.innerHTML = nexth0;

  if (now.h[1] != beforeTime.h[1]) {
    clock.h.digit_Left.cardWrap.animate(
      {
        transform: ["rotateX(0)", "rotateX(180deg)"],
      },
      1000
    );
  }
  setTimeout(function () {
    clock.h.digit_Left.setAttribute("data-digit-back", nexth0);
    clock.h.digit_Left.back.innerHTML = nexth0;
  }, 200);
} //function end

function changeTimeH() {}

function runnigClock() {
  date = new Date();
  now.h = String(date.getHours()).padStart(2, "0");
  now.m = String(date.getMinutes()).padStart(2, "0");
  now.s = String(date.getSeconds()).padStart(2, "0");
  console.log(`${now.h}:${now.m}:${now.s}`);

  changeTime();

  beforeTime.h = now.h;
  beforeTime.m = now.m;
  beforeTime.s = now.s;

  //console.log(`${now.h}시${now.m}분${now.s}초`);
}
setInterval(runnigClock, 1000);

//h: String(date.getHours()).padStart(2, "0"),
//m: String(date.getMinutes()).padStart(2, "0"),
//s: String(date.getSeconds()).padStart(2, "0"),
