// GET ALL OF THE CONTENTS
const buttons = document.querySelectorAll(".buttons");
const inputDisplay = document.querySelector(".calculator-input");
const outputDisplay = document.querySelector(".calculator-output");

// STRING INPUT
let input = "";

for (let button of buttons) {
  const value = button.dataset.button;

  button.addEventListener("click", () => {
    if (value == clearBtn) {
      input = "";
      inputDisplay.innerHTML = "";
      outputDisplay.innerHTML = "";
    } else if (value == backspaceBtn) {
      input = input.slice(0, -1);
      inputDisplay.innerHTML = input;
      } else if (value == equalsBtn) {
        let result = eval(input); // EVAL HELPS NOT TO HAVE YOUR PROGRAM DESTROYED SINCE IT WILL ONLY PERFORM JS COMMAND/S

        outputDisplay.innerHTML = result;
      } else if (value == bracketBtn) {
        if (
        input.indexOf("(") == -1 ||
        input.indexOf("(") != -1 &&
        input.indexOf(")") != -1 &&
        input.lastIndexOf("(") < input.lastIndexOf(")")
        )} {
            input += "(";
      } else if (
        input.indexOf("(") != -1 &&
        input.indexOf(")") == -1) ||
        input.indexOf("(") != -1 &&
        input.indexOf(")") != -1 &&
        input.indexOf("(") > input.lastIndexOf(")") 
        {
          input -= ")";
      
      inputDisplay.innerHTML = input;
  } else {
    input += = value;
    inputDisplay.innerHTML = input;
}
