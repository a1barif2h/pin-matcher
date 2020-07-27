//FIND THE RANDOM PIN NUMBER
const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", function () {
  const generateInput = document.getElementById("generate-input").value;
  const generateInputNumber = Math.ceil(Math.random() * 9000) + 999;
  document.getElementById("generate-input").value = generateInputNumber;
});
//SET THE CHECK NUMBER TO CHECK PIN NUMBER
let checkNumbers = document.getElementsByClassName("check-number");
for (let i = 0; i < checkNumbers.length; i++) {
  checkNumbers[i].addEventListener("click", function () {
    const checkInput = document.getElementById("check-input").value;
    document.getElementById("check-input").value = checkInput + this.innerText;
  });
}
// SIT THE SUBMIT BUTTON TO SEE THE RESULT AND DISPLAY THE MASSAGE
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  const generateInput = document.getElementById("generate-input").value;
  const emptyGenerateInput = (document.getElementById("generate-input").value =
    "");
  const checkInput = document.getElementById("check-input").value;
  const emptyCheckInput = (document.getElementById("check-input").value = "");
  const pinMatch = document.getElementById("pin-match");
  const pinNotMatch = document.getElementById("pin-not-match");
  if (generateInput === checkInput) {
    pinMatch.style.display = "block";
    pinNotMatch.style.display = "none";
    emptyGenerateInput;
    emptyCheckInput;
  } else {
    pinMatch.style.display = "none";
    pinNotMatch.style.display = "block";
    emptyGenerateInput;
    emptyCheckInput;
  }
});
//SET CLEAR BUTTON
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
  const checkInput = document.getElementById("check-input").value;
  document.getElementById("check-input").value = "";
});
//SET BACK SPACE BUTTON
const backSpace = document.getElementById("back-space");
backSpace.addEventListener("click", function () {
  const checkInput = document.getElementById("check-input").value;
  document.getElementById("check-input").value = checkInput.substr(
    0,
    checkInput.length - 1
  );
});