/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function generateMessage(time) {
  if (time > 0 && time < 12) {
    return 'Good Morning'
  }
  if (time >=12 && time < 17) {
    return 'Good Afternoon'
  }
  if (time >= 17) {
    return 'Good Evening'
  }
}

function greet(time) {
  time = time.split(':')[0]
  return generateMessage(time)
}

function displayMessage(message) {
  const $greeting = document.getElementById('greeting')
  $greeting.innerText = message
}