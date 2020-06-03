/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let date = str.split(':')
  let num = parseInt(date[0])
  if (num < 12) {
    return "Good Morning"
  }
  else if (num > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  const node = document.getElementById("greeting");
  node.innerText = str;
}