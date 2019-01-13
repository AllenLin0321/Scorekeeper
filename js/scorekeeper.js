var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var rsButton = document.querySelector("#rs");


var number = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;

var h1 = document.querySelector("h1");
var p1Score_now = document.querySelector(".p1score");
var p2Score_now = document.querySelector(".p2score");

var gameOver = false;
var winningScore=5;

// display the number -> Playing to :x
var play_number_now = document.querySelector(".play_number");

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Score_now.classList.add("winner");
        }
        p1Score_now.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Score_now.classList.add("winner");
        }
        p2Score_now.textContent = p2Score;
    }
});

rsButton.addEventListener("click", function () {
    reset();
});

function reset(){
    p1Score = p2Score = 0;
    p1Score_now.textContent = p1Score;
    p2Score_now.textContent = p2Score;
    gameOver = false;
    p1Score_now.classList.remove("winner");
    p2Score_now.classList.remove("winner");

}

// Listener -> change
number = document.addEventListener("change", function () {
    // play_number_now.textContent=number.value;
    var input = document.querySelector("input");
    play_number_now.textContent= input.value;
    winningScore=Number(input.value);
    reset();
});