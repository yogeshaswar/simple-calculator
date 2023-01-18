let num1 = 6
let num2 = 4
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL = document.getElementById("sum-el")

function add() {
    let add = num1 + num2
    sumEL.innerText = sumEL.innerText + add
}
function substract() {
    let add = num1 - num2
    sumEL.innerText = sumEL.innerText + add
}
function multiply() {
    let add = num1 * num2
    sumEL.innerText = sumEL.innerText + add
}
function divide() {
    let add = num1 / num2
    sumEL.innerText = sumEL.innerText + add
}
function reset() {
    let add = 0
    sumEL.innerText = "Result: "
}




// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


