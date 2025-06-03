const canvas = document.getElementById('flashCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Mouse tracking
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Load images
const ratImg = new Image();
ratImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Black_rat_%28Rattus_rattus%29.jpg/120px-Black_rat_%28Rattus_rattus%
