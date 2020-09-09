function touchRock () {
  var userName = prompt("What is your name?", "Enter your name here.");
  
  if (userName) {
    alert("It's nice to meet you, " + userName + ".");
    document.getElementById("rockImg") .src = "https://resources.oreilly.com/examples/9780596527747/raw/master/JS%20examples/chapter01/irock/rock_happy.png";
  }
}