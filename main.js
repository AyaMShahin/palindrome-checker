const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");



checkButton.addEventListener("click", (str) => {
  str = userInput.value;
  const regex = /[^A-Za-z0-9]/g;
  if (str === "") {
    alert("Please input a value");
  }
  // const lowRegStr = str.toLowerCase().replace(regex, "");
  const lowRegStr = str.toLowerCase().replace(regex, "");
  const reverseStr = lowRegStr.split("").reverse().join("");
  result.innerText= reverseStr === lowRegStr ? `${str} is a palindrome` :
    `${str} is not a palindrome`
});
