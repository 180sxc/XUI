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
  }
}
var particleCount = 1500;
var particles = [];
function animate () {
  var canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);
}
