const basebutton = document.getElementById("Button");
const text = document.getElementById("countertext");
const button2 = document.getElementById("Level2Button");
let clicks = 0;
let level = 1;
basebutton.addEventListener("click", () => {
  clicks += level;
  text.textContent = clicks;
});  
button2.addEventListener("click", () => {
  if (clicks >= 100) {
    level += 1;
    clicks -= 100;
  } else {
     alert("You need at least 100 clicks before you can upgrade the button");
  }
});
