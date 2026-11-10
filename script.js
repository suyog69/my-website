const button = document.getElementById("clickBtn");
const message = document.getElementById("msg");

let clickCount = 0;

button.addEventListener("click", () => {
  clickCount++;
  message.textContent = `Awesome! You clicked the button ${clickCount} times. 🚀`;
});
