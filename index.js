/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let splitTime = timeString.split(":")

  console.log(splitTime[0])
  if (splitTime[0] < 12) {
    return ("Good Morning")
  }
  if (12 <= splitTime[0] && splitTime[0] <= 17) {
    return ("Good Afternoon")
  }
  if (splitTime[0] > 17) {
    return ("Good Evening")
  }
  // console.log(timeString.split(":"))
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let greeting = document.getElementById('greeting')
  let body = document.querySelector('body')
  greeting.innerText = string
  console.log(greeting)
  body.appendChild(greeting)
}
