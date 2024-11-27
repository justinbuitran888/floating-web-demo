const canvas = document.getElementById('birds-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const birds = [];
const birdCount = 20;

class Bird {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * 2 + 1;
    this.size = Math.random() * 10 + 5;
  }

  update() {
    this.x -= this.speed;
    if (this.x < 0) this.x = canvas.width;
  }

  draw() {
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size, this.size / 2, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(100, 100, 100, 0.8)';
    ctx.fill();
  }
}

// Tạo các con chim
for (let i = 0; i < birdCount; i++) {
  birds.push(new Bird());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  birds.forEach(bird => {
    bird.update();
    bird.draw();
  });
  requestAnimationFrame(animate);
}

animate();