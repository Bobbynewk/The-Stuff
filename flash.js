const canvas = document.getElementById('flashCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Track mouse position
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Load images
const ratImg = new Image();
ratImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Black_rat_%28Rattus_rattus%29.jpg/120px-Black_rat_%28Rattus_rattus%29.jpg';

const hackerImg = new Image();
hackerImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hacker_icon.svg/120px-Hacker_icon.svg.png';

// Initial positions
let hacker = { x: 100, y: 100 };

// Flashing + drawing loop
let isBlack = false;
setInterval(() => {
  // Flash
  ctx.fillStyle = isBlack ? 'white' : 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  isBlack = !isBlack;

  // Update hacker position (chasing mouse)
  hacker.x += (mouse.x - hacker.x) * 0.05;
  hacker.y += (mouse.y - hacker.y) * 0.05;

  // Draw rat (on mouse)
  ctx.drawImage(ratImg, mouse.x - 20, mouse.y - 20, 40, 40);

  // Draw hacker (chasing)
  ctx.drawImage(hackerImg, hacker.x - 30, hacker.y - 30, 60, 60);
}, 100); // Faster frame rate for animation
