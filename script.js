const yesBtn = document.querySelector(".yes-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const noBtn = document.getElementById("move");
const yesaudio = new Audio("./yes.mp3");
const noaudio = new Audio("./Fuck.mp3");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  gif.src = "https://media0.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif";
  question.innerHTML = "I love you toooo Fakh!";
  yesaudio.play();
});

noBtn.addEventListener("click", () => {
  gif.src = "https://www.icegif.com/wp-content/uploads/2023/05/icegif-187.gif";
  question.innerHTML = "No You Love Me";
  noaudio.play();
});

// Make the No button move randomly on hover
function runaway(id) {
  id.style.top = Math.round(Math.random() * 250) - 100 + 'px';
  id.style.left = Math.round(Math.random() * 250) - 200 + 'px';
}

