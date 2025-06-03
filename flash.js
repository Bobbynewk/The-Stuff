const canvas = document.getElementById('flashCanvas');
const ctx = canvas.getContext('2d');

// Make canvas fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fill black screen
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Load scary image (jump scare)
const scareImg = new Image();
scareImg.src = 'https://i.imgur.com/ZX9Q4NE.png'; // Replace with any scary face image

// Wait 3 seconds, then show jumpscare
setTimeout(() => {
  // Flash white background fast for shock
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Play scary sound (optional)
  const scream = new Audio('https://www.myinstants.com/media/sounds/movie_1.mp3'); // Optional scream sound
  scream.play();

  // Draw scary face
  scareImg.onload
