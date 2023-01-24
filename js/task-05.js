let inputName = document.querySelector("#name-input");
let outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
    outputName.textContent = event.currentTarget.value;
    
});
