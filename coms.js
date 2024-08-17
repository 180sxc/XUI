let htmlLoaded = false;
window.addEventListener('load', function() {
  htmlLoaded = true;
  startUp();
  resizeCanvas();
  console.log("html loaded")
})
function startUp () {
  var canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d');
  spawnParticles ()
  animate ();
}
window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  console.log("resized")
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let canvas = document.getElementById("canvas");
  canvas.style.height = screenHeight + "px";
  canvas.style.width = screenWidth + "px";
}


class Particles {
  constructor (x, y, ctx) {
    this.x = x;
    this.y = y;
    this.size = 5;
    this.ctx = ctx;
    this.dir = 0;
    this.speed = 4;
  }
  spawn () {
    this.ctx.fillStyle = "rgba(255,255,255,0.8)";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  }
  update () {
  }
}
var particleCount = 500;
var particles = [];

function spawnParticles () {
  var canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  for(let i = 0; i < particleCount; i++){
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particles(x, y, ctx));
  }
}

function animate () {
  var canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update();
    particle.spawn();
  });
  requestAnimationFrame(animate);
}
