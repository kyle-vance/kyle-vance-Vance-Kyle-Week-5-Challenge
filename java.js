// Timer that updates in real time
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

  `use strict`
  var datetime = new Date().getDay();
  console.log(datetime); // it will represent date in the console of developers tool
  document.getElementById("time").textContent = datetime; //it will print on html page
