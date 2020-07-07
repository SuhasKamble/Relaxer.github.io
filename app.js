const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
breateAnimation();
function breateAnimation() {
  text.innerHTML = "Breath In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breateAnimation, totalTime);
