const canvas = document.getElementById('flashCanvas');
const ctx = canvas.getContext('2d');

// Make canvas fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isBlack = false;

// Flash the canvas black and white
setInterval(() => {
  ctx.fillStyle = isBlack ? 'white' : 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  isBlack = !isBlack;
}, 500); // Adjust interval (ms) as needed

