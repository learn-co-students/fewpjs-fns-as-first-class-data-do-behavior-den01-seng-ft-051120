/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let timeAsString = parseInt(time)
  if (timeAsString < 12){
    return "Good Morning"
  }else if (timeAsString >=12 && timeAsString < 15){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greet){
  document.querySelector('h1').innerText = greet
}