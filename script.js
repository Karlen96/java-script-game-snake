var snakeBody = document.querySelector(".snake");
var body = document.querySelector("body");
var boxBody = document.querySelector(".box");
var x = 0;
var y = 0;
body.onkeydown = function check(event) {
	var key = event.keyCode;

	if ((x >= 0 && x < (boxBody.offsetWidth - snakeBody.offsetWidth)) && (y >= 0 && y < (boxBody.offsetHeight - snakeBody.offsetHeight))) {
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
		alert("game over");
	}
}

function createRandomBox() {
	var randomLeft = Math.round(Math.random() * (boxBody.offsetWidth - snakeBody.offsetWidth));
	var randomTop = Math.round(Math.random() * (boxBody.offsetHeight - snakeBody.offsetHeight));
	if (randomLeft <= (snakeBody.offsetLeft + snakeBody.offsetWidth * 2) && randomTop <= (snakeBody.offsetLeft + snakeBody.offsetHeight) * 2) {
		return createRandomBox();
	} else {
		var randomBox = document.createElement("div");
		boxBody.appendChild(randomBox);
		randomBox.classList.add("randomBox");
		randomBox.style.top = randomTop + "px";
		randomBox.style.left = randomLeft + "px";
	}
}
for (var i = 0; i < 50; i++) {
	createRandomBox();
}



function keyUp() {
	x--;
	snakeBody.style.top = x + "px";
}

function keyDown() {
	x++;
	snakeBody.style.top = x + "px";
}

function keyRight() {
	y++;
	snakeBody.style.left = y + "px";
}

function keyLeft() {
	y--;
	snakeBody.style.left = y + "px";
}