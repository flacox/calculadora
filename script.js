let buttons = document.querySelectorAll(".key");
let displayText = document.querySelector("#display-text");
let tempNum = displayText.textContent;
let tempNum1 = displayText.textContent;
let tempNum2 = displayText.textContent;
let operator;

function updateDisplay(value){
	displayText.textContent += value;
	tempNum  = displayText.textContent;
	return 0;
}

function clear(){
	displayText.textContent = "";
}

buttons.forEach((button) => {
	button.addEventListener('click', (value) => {
		console.log(button.value);
		if (button.value == 'C' || button.value == 'CE') {
			clear();
		}else if(button.value == '+' || button.value == '-' || button.value == 'x' || button.value == '÷'){
			tempNum1 = Number(tempNum);
			operator = button.value;
			clear();
		}else if(button.value == '='){
			tempNum2 = Number(tempNum);
			clear();
			if (operator == "+"){
				displayText.textContent = tempNum1 + tempNum2;
			}else if(operator == "-"){
				displayText.textContent = tempNum1 - tempNum2;
			}else if(operator == "x"){
				displayText.textContent = tempNum1 * tempNum2;
			}else if(operator == "÷"){
				displayText.textContent = tempNum1 / tempNum2;
			}
		}else if(button.value == '⌫'){
			displayText.textContent = displayText.textContent.slice(0, (displayText.textContent.length-1));
             tempNum = displayText.textContent;
		}else {
			updateDisplay(button.value);
		}
		
	});
});