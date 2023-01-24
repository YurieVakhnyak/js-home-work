const textInput = document.querySelector("#validation-input");
textInput.value
textInput.addEventListener("blur", () => {
    let length = textInput.value.length;    
    const dataLength = parseInt(textInput.getAttribute('data-length'))
    if (length !== dataLength)   
        textInput.classList.add("invalid"); 
    else 
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
});

