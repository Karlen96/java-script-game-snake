var snakeBody = document.querySelector(".snake");
var body = document.querySelector("body");
var boxBody = document.querySelector(".box");
var startGame = document.querySelector(".startBtn")
var GameResult = document.querySelector(".resultOfGame");
var x = 0;
var y = 0;
var resultOfGame = 0;
startGame.onclick = Pusk;

function Pusk() {
	location.reload();
}

body.onkeydown = function check(event) {
	var key = event.keyCode;

	if ((x >= 0 && x <= (boxBody.offsetWidth - snakeBody.offsetWidth - 2)) && (y >= 0 && y <= (boxBody.offsetHeight - snakeBody.offsetHeight - 2))) {
		if (key == 38) {
			keyUp();
		} else if (key == 40) {
			keyDown();
		} else if (key == 39) {
			keyRight();
		} else if (key == 37) {
			keyLeft();
		}
	} else {
		var gameOverout = document.querySelector(".gameOverout");
		gameOverout.innerHTML = "game over";
		GameResult.innerHTML = "Your result : " + resultOfGame + " points";
		startGame.style.display = "block";
		boxBody.remove();
	}
}

function createRandomBox() {
	var randomLeft = Math.round(Math.random() * (boxBody.offsetWidth - snakeBody.offsetWidth));
	var randomTop = Math.round(Math.random() * (boxBody.offsetHeight - snakeBody.offsetHeight));
	GameResult.innerHTML = "Your result : " + resultOfGame + " points";
	if (randomLeft % snakeBody.offsetWidth != 0 || randomTop % snakeBody.offsetHeight != 0) {
		return createRandomBox();
	} else {
		var randomBox = document.createElement("img");
		boxBody.appendChild(randomBox);
		randomBox.setAttribute("src", "img/food.jpg");
		randomBox.classList.add("randomBox");
		randomBox.style.top = randomTop + "px";
		randomBox.style.left = randomLeft + "px";
	}
}

createRandomBox();

function keyUp() {
	var randomBox = document.querySelector(".randomBox");
	snakeBody.style.transform = "rotate(0deg)";
	x -= snakeBody.offsetWidth;
	snakeBody.style.top = x + "px";
	if (snakeBody.offsetLeft == randomBox.offsetLeft && snakeBody.offsetTop == randomBox.offsetTop) {
		randomBox.remove();
		resultOfGame++;
		createRandomBox();
	}
}

function keyDown() {
	var randomBox = document.querySelector(".randomBox");
	snakeBody.style.transform = "rotate(180deg)";
	x += snakeBody.offsetWidth;
	snakeBody.style.top = x + "px";
	if (snakeBody.offsetLeft == randomBox.offsetLeft && snakeBody.offsetTop == randomBox.offsetTop) {
		randomBox.remove();
		resultOfGame++;
		createRandomBox();
	}
}

function keyRight() {
	var randomBox = document.querySelector(".randomBox");
	snakeBody.style.transform = "rotate(90deg)";
	y += snakeBody.offsetWidth;
	snakeBody.style.left = y + "px";
	if (snakeBody.offsetLeft == randomBox.offsetLeft && snakeBody.offsetTop == randomBox.offsetTop) {
		randomBox.remove();
		resultOfGame++;
		createRandomBox();
	}
}

function keyLeft() {
	var randomBox = document.querySelector(".randomBox");
	snakeBody.style.transform = "rotate(270deg)";
	y -= snakeBody.offsetWidth;
	snakeBody.style.left = y + "px";
	if (snakeBody.offsetLeft == randomBox.offsetLeft && snakeBody.offsetTop == randomBox.offsetTop) {
		randomBox.remove();
		resultOfGame++;
		createRandomBox();
	}
}
