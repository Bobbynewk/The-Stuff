const canvas = document.getElementById('flashCanvas');
const ctx = canvas.getContext('2d');

// Make canvas fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isRed = false;

// Flash the canvas black and white
setInterval(() => {
  ctx.fillStyle = isRed ? 'blue' : 'red';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  isRed = !isRed;
}, 500); // Adjust interval (ms) as needed

