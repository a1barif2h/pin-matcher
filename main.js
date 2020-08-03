//FIND THE RANDOM PIN NUMBER
document.getElementById("generate-btn").addEventListener("click", function () {
  const generateInputNumber = Math.ceil(Math.random() * 9000) + 999;
  document.getElementById("generate-input").value = generateInputNumber;
});
//SET THE NUMBER TO CHECK PIN NUMBER
let setNumbers = document.getElementsByClassName("set-number");
for (let i = 0; i < setNumbers.length; i++) {
  setNumbers[i].addEventListener("click", function () {
    const checkInput = document.getElementById("check-input").value;
    document.getElementById("check-input").value = checkInput + this.innerText;
  });
}
// SET THE SUBMIT BUTTON TO CHECK THE MATCH AND DISPLAY THE MASSAGE
document.getElementById("submit-button").addEventListener("click", function () {
  const generateInput = document.getElementById("generate-input").value;
  const checkInput = document.getElementById("check-input").value;
  const pinMatch = document.getElementById("pin-match");
  const pinNotMatch = document.getElementById("pin-not-match");
  const emptyInput = document.getElementById("empty-input");
  if (generateInput == "" || checkInput == "" || generateInput !== checkInput) {
    if (generateInput == "" && checkInput == "") {
      emptyInput.style.display = "block";
      pinMatch.style.display = "none";
    } else {
      pinMatch.style.display = "none";
      pinNotMatch.style.display = "block";
      emptyInput.style.display = "none";
      document.getElementById("check-input").value = "";
    }
  } else {
    pinMatch.style.display = "block";
    pinNotMatch.style.display = "none";
    emptyInput.style.display = "none";
    document.getElementById("generate-input").value = "";
    document.getElementById("check-input").value = "";
  }
});
//SET CLEAR BUTTON
document.getElementById("clear-button").addEventListener("click", function () {
  document.getElementById("check-input").value = "";
});
//SET BACK SPACE BUTTON
document.getElementById("back-space").addEventListener("click", function () {
  const checkInput = document.getElementById("check-input").value;
  document.getElementById("check-input").value = checkInput.substr(
    0,
    checkInput.length - 1
  );
});
