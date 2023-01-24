function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const color = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  let randomHexColor = getRandomHexColor();
  color.textContent = randomHexColor;
  const body = document.querySelector("body");
  body.setAttribute("style", `background-color:${randomHexColor}`);
})
