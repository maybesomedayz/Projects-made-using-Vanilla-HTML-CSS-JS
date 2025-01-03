let gameSeq = [];
let userSeq = [];
let btns = ["Yellow", "Blurple", "Black-pearl", "Red"];
let btn = document.querySelector(".btn")

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is Started!");
        started = true;

        levelUp();
    };
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("green");
    setTimeout(function() {
        btn.classList.remove("green")
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("Current Level : ", level);

    if(gameSeq[idx] == userSeq[idx]) {
        // console.log("Same Value");
        if(gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `<span class = "gave-over">GAME'S OVER 🏁</span><br><br><span class = "score">Your Score was : <b>${level}</b></span><br><br>Press any key to start the game again!`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        }, 150)
        reset();
    }
}


function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress)
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];

    level = 0;
}

