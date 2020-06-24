/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time) {
 let hourMins = parseInt(time.split(":").join(""))
 let message = ""
 if(hourMins < 1200){
   return message = "Good Morning"
 } else if(hourMins >= 1200 && hourMins <= 1700) {
   return message = "Good Afternoon"
 } else if(hourMins > 1700){
   return message = "Good Evening"
 } else {
   return message = "TEST"
 }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  const greeting = document.getElementById('greeting')
  greeting.innerText = message
}