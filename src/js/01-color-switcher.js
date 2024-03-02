
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let bodyColorChange;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    bodyColorChange = setInterval(function() {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000); 
  });

  stopButton.addEventListener('click', () => {
    clearInterval(bodyColorChange);
    startButton.disabled = false;
  });