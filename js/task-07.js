const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
    const minValue = fontSizeControl.getAttribute('min');
    const maxValue = fontSizeControl.getAttribute('max');
    let inputValue = event.currentTarget.value;
    text.textContent = "Font size: " + inputValue + " Abracadabra!";
    text.setAttribute("style", `font-size:${inputValue}px`);
    

})