/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string){
  const time_split = string.split(':');
  const hour = parseInt(time_split[0]);
  if (hour < 12){
    return "Good Morning";
  } else if (hour >= 17){
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

const board = document.querySelector('#greeting')

function displayMessage(string){
  board.innerText = string
}