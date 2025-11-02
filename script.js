const button = document.getElementById("Button");
const text = document.getElementById("countertext");
let clicks = 0
button.addEventListener("click", () => {
  clicks++;
  
  text.textContent = clicks;
});  
