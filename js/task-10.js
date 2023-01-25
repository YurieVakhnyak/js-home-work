function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInput = document.querySelector('[type="number"]');
const btnCreateBox = document.querySelector('[data-create]');
const btnDestroyBox = document.querySelector('[data-destroy]');
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

btnCreateBox.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const boxes = document.querySelector("#boxes");
  let numberOfBoxes = numberInput.value;
    
  function createBox() {
    const boxHtml = `<div class="box"></div>`
    boxes.insertAdjacentHTML("afterbegin", boxHtml);        
  };
  
  function colorizeBox() {
      createBox();
      let box = document.querySelector(".box");
      let randomHexColor = getRandomHexColor();
      box.setAttribute("style", `background-color:${randomHexColor}`);
  }  
  
  function createColoredBoxes(number) {
    let counter = 0;
    while (counter < number) {
      colorizeBox();
      counter += 1;
    }
  }  
  createColoredBoxes(numberOfBoxes);
  const numberOfAllBoxes = boxes.children.length;
  console.log(`Number of all boxes: ${numberOfAllBoxes}`);
})

btnDestroyBox.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  // const numberOfAllBoxes = boxes.querySelectorAll("div div").length;
  const numberOfAllBoxes = boxes.children.length;
  console.log(`Number of delited boxes: ${numberOfAllBoxes}`);
  
  function removeAllBoxes() {
    let counter = numberOfAllBoxes;
    while (counter !== 0) {
      let box = document.querySelector(".box");
      box.remove();
      counter -= 1;
    }
  }
  removeAllBoxes();
  // boxes.remove();
  // const sameBoxes = `<div class="boxes" id="boxes"></div>`
  // controls.insertAdjacentHTML("afterend", sameBoxes);  
});