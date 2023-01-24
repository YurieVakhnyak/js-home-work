const textInput = document.querySelector("#validation-input");
textInput.value
textInput.addEventListener("blur", () => {
    let length = textInput.value.length;    
     
    if (length !== 6)   
    textInput.classList.add("invalid");  
      else 
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
   
        

});

// textInput.addEventListener("focus", () => {
//     textInput.value = "";
// });
