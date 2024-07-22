let gameSeq = [];
let userSeq = [];
let highScores = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
  }

  levelUp();
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userBtnFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  // random btn is choose
  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  btnFlash(randomBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    highScores.push(level);
    let highSc = userHighScores();
    h2.innerHTML = `<big>Game Over!</big> Your score was <b>${level}</b> <br> <i>Your High Score was ${highSc}</i> <br> Press any key to start`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userBtnFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function userHighScores() {
  let highSc = 0;
  for (highScore of highScores) {
    if (highSc < highScore) {
      highSc = highScore;
    }
  }
  return highSc;
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
