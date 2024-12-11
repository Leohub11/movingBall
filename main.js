let ball = document.getElementById("ball");
ball.style.position = "absolute";
const speedControl = document.getElementById("speedControl");
const speedValue = document.getElementById("speedValue");

let intervalDelay = parseInt(speedControl.value);
let intervalId;

function randomMovement() {
  const maxX = window.innerWidth - ball.offsetWidth;
  const maxY = window.innerHeight - ball.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  ball.style.left = randomX + "px";
  ball.style.top = randomY + "px";
}

function startMoving() {
  clearInterval(intervalId);
  intervalId = setInterval(randomMovement, intervalDelay);
}

function explode() {
  ball.src = "./200w.gif";
  clearInterval(intervalId);
  setTimeout(() => {
    ball.style.display = "none";
    alert("Boom! the ball has exploded");
  }, 1000);
}
speedControl;
ball.addEventListener("click", explode);
window.onload = startMoving;

// document.getElementById("ball").addEventListener("click", explode);

// function ballMove() {
//   ball.style.left = leftPosition + "px";
//   ball.style.top = topPosition + "px";

//   topPosition += 5;
//   leftPosition += 5;

//   console.log(ball.style.left);
//   console.log(ball.style.top);
// }

// function explode() {
//   ball.src = "200w.gif";
//   clearInterval(moveBall);
// }

// function stop() {
//   clearInterval(moveBall);
// }
// moveball = setInterval(ballMove, 100);
