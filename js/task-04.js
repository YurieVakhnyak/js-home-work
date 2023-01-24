

let counterValue = document.querySelector("#value");
const heading = document.createElement("h1");
heading.textContent = "Counter";
const counter = document.querySelector("#counter");
counter.prepend(heading);

const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");

//   for (let btn of document.querySelectorAll("button")) {
    let clicks = 0;
    
    decrement.addEventListener('click', e => {
        counterValue.textContent = clicks - 1;
        clicks = counterValue.textContent;
    });
    increment.addEventListener('click', e => {
        counterValue.textContent = ++clicks;
    });
//   }
